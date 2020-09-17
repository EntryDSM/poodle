import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps, useHistory } from 'react-router';
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
  GraduatedGradeInput,
  GraduatedNonTransferSemester,
} from '@/components/Grade';
import { mapDispatchToProps, mapStateToProps } from './ConnectionGrade';
import {
  getIsFinish,
  getIsStarted,
  isEmptyCheck,
  isScoreRangeAble,
  useReGenerateTokenAndDoCallback,
} from '@/lib/utils/function';
import ToastController from '@/container/common/ToastContainer';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDivGrade';

const Grade: FC<Props> = props => {
  const history = useHistory();
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
      gradeType,
    }: MapStateToProps) => {
      if (gradeType === 'GED') {
        return !isScoreRangeAble(parseInt(score));
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
        await props.setGradeToServer(true);
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

  const renderPage = useCallback(() => {
    if (props.gradeType === 'GED')
      return <QualificationScore {...props} isError={isError} />;
    else if (props.gradeType === 'GRADUATED')
      return (
        <>
          <VolanteerWorkTimeAttend {...props} isError={isError} />
          <GraduatedNonTransferSemester {...props} />
          <GraduatedGradeInput {...props} isGradeAllX={props.isGradeFirst} />
        </>
      );
    else if (props.gradeType === 'UNGRADUATED')
      return (
        <>
          <VolanteerWorkTimeAttend {...props} isError={isError} />
          <NonTransferSemester {...props} />
          <GradeInput {...props} isGradeAllX={props.isGradeFirst} />
        </>
      );
    else {
      return <></>;
    }
  }, [props, isError]);
  const moveCurrentPage = useCallback(() => {
    props.history.push('/info');
  }, []);
  useEffect(() => {
    props.getGradeToServer();
  }, []);
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
  useEffect(() => {
    if (props.pageMove) {
      history.push('/introduction');
      modalController.resetToast();
      props.pageMoveChange(false);
      props.setSuccessDate(null);
    }
  }, [props.pageMove]);

  useEffect(() => {
    if (props.status) {
      alert('최종 제출 하셨습니다.');
      history.push('/');
    } else if (getIsFinish()) {
      alert('종료 되었습니다.');
      history.push('/');
    } else if (!getIsStarted()) {
      alert('시작 하지 않았습니다.');
      history.push('/');
    }
  }, [props.status]);
  return (
    <GradeDiv>
      <div id={TOAST_DIV_ID} />
      <GradeMain>
        <Title margin='100px'>성적 입력</Title>
        {renderPage()}
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
