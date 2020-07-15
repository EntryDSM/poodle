import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { GradeDiv, GradeMain } from '../../styles/Grade';
import {
  Title,
  DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import {
  VolanteerWorkTimeAttend,
  NonTransferSemester,
  GradeInput,
  QualificationScore,
} from '../../components/Grade';
import { mapDispatchToProps, mapStateToProps } from './ConnectionGrade';
import { isEmptyCheck } from '../../lib/utils/function';
import {
  gradeResponseToState,
  gradeStateToRequest,
  gradeStateToGedRequest,
  getDataToServer,
  setDataToServer,
  errorTypeCheck,
} from '../../lib/api/ApplicationApplyApi';
import { gradeServerType, gedGradeServerType } from '@/lib/api/ApiType';
import { GRADE_URL } from '@/lib/api/ServerUrl';
import ToastController from '@/container/common/ToastContainer';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDiv';

const Grade: FC<Props> = props => {
  const dispatch = useDispatch();
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
      if (props.isQualification) {
        return isEmptyCheck(score);
      }
      console.log(isEmptyCheck(serviceTime));
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
          await setGrade(props);
          moveNextPage();
        } catch (error) {
          errorTypeCheck(error);
        }
      }
    },
    [props],
  );
  const setGrade = useCallback(async (props: any) => {
    if (props.isQualification) {
      const request = gradeStateToGedRequest(props);
      return await setDataToServer<gedGradeServerType>(GRADE_URL, request);
    }
    const request = gradeStateToRequest(props);
    return await setDataToServer<gradeServerType>(GRADE_URL, request);
  }, []);
  const moveCurrentPage = useCallback(() => {
    props.history.push('/info');
  }, []);
  const moveNextPage = useCallback(() => {
    props.history.push('/introduction');
  }, []);
  const testServer = () => {
    const response: gradeServerType = {
      volanteer_time: 1,
      full_cut_count: 1,
      period_cut_count: 1,
      early_leave_count: 1,
      late_count: 1,
      korean: 'AAAAA',
      social: 'AAAAA',
      history: 'AAAAA',
      math: 'AAAAA',
      science: 'AAAAA',
      tech_and_home: 'AAAAA',
      english: 'AAAAA',
      ged_average_score: 30,
    };
    return response;
  };
  useEffect(() => {
    const stateBuf = gradeResponseToState(testServer());
    dispatch(props.setAll(stateBuf));
  }, []);
  return (
    <GradeDiv>
      <div id={TOAST_DIV_ID} />
      <GradeMain>
        <Title margin='100px'>성적 입력</Title>
        {props.isQualification ? (
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
