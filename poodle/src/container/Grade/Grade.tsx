import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { GradeDiv, GradeMain } from '@/styles/Grade';
import {
  Title,
  DefaultlNavigation,
} from '@/components/default/ApplicationFormDefault';
import {
  VolanteerWorkTimeAttend,
  NonTransferSemester,
  GradeInput,
  QualificationScore,
} from '@/components/Grade';
import { mapDispatchToProps, mapStateToProps } from './ConnectionGrade';
import {
  isEmptyCheck,
  useReGenerateTokenAndDoCallback,
} from '@/lib/utils/function';
import { errorTypeCheck } from '@/lib/api/ApplicationApplyApi';
import ToastController from '@/container/common/ToastContainer';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDiv';

const Grade: FC<Props> = props => {
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const [isError, errorChange] = useState<boolean>(false);
  const isStateAble = useCallback(
    ({
      serviceTime,
      leaveLateDay,
      perceptionDay,
      cutClassDay,
      absentDay,
      score,
    }: MapStateToProps) => {
      if (props.gradeType === 'GED') {
        return isEmptyCheck(score);
      }
      return (
        isEmptyCheck(serviceTime) ||
        isEmptyCheck(leaveLateDay) ||
        isEmptyCheck(absentDay) ||
        isEmptyCheck(cutClassDay) ||
        isEmptyCheck(perceptionDay)
      );
    },
    [],
  );
  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isError = isStateAble(state);
      if (isError) {
        errorChange(isError);
        modalController.createNewToast('ERROR');
      } else {
        try {
          await props.setGradeToServer(true);
        } catch (error) {
          errorTypeCheck(error);
        }
      }
    },
    [props],
  );

  const getGradeGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    props.getGradeToServer,
  );
  const setGradeGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => props.setGradeToServer(false),
  );

  const moveCurrentPage = useCallback(() => {
    props.history.push('/info');
  }, []);
  useEffect(() => {
    props.getGradeToServer();
  }, []);
  useEffect(() => {
    if (props.page !== null) {
      props.history.push(`/${props.page}`);
    }
  }, [props.page]);
  useEffect(() => {
    if (!props.error) return;
    if (props.error.status === 401) {
      if (props.getGradeError.status === 401)
        getGradeGenerateTokenAndDoCallback();
      if (props.setGradeError.status === 401)
        setGradeGenerateTokenAndDoCallback();
      return;
    }
    modalController.createNewToast('SERVER_ERROR');
  }, [props.error, props.setGradeError, props.getGradeError]);
  useEffect(() => {
    if (!props.successTime) return;
    modalController.createNewToast('SUCCESS');
  }, [props.successTime]);
  return (
    <GradeDiv>
      <div id={TOAST_DIV_ID} />
      <GradeMain>
        <Title margin='100px'>성적 입력</Title>
        {props.gradeType === 'GED' ? (
          <QualificationScore {...props} isError={isError} />
        ) : (
          <>
            <VolanteerWorkTimeAttend {...props} isError={isError} />
            <NonTransferSemester {...props} />
            <GradeInput {...props} />
          </>
        )}
        <DefaultlNavigation
          page='grade'
          currentPageClickHandler={moveCurrentPage}
          nextPageClickHandler={() => goNextPage(props)}
        />
      </GradeMain>
    </GradeDiv>
  );
};

export default withRouter(Grade);
