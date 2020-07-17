import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import {
  selfIntroductionServerType,
  studyPlanServerType,
} from '@/lib/api/ApiType';
import {
  selfIntroductionStateToRequest,
  studyPlanStateToRequest,
  setDataToServer,
  getDataToServer,
  errorTypeCheck,
  selfIntroductionResponseToState,
  studyPlanResponseToState,
} from '@/lib/api/ApplicationApplyApi';
import { INTRODUCTION_URL } from '@/lib/api/ServerUrl';
import {
  Title,
  DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { IntroductionDiv, IntroductionMain } from '../../styles/Introduction';
import { IntroductionInputTemplete } from '../../components/Introduction';
import {
  SELF_INTRODUCTION_DESCRIBE,
  STUDY_PLAN_DESCRIBE,
} from '../../components/Introduction/constance';
import { mapDispatchToProps, mapStateToProps } from './ConnectIntroduction';
import { isEmptyCheck } from '../../lib/utils/function';
import ToastController from '../common/ToastContainer';

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;
const TOAST_DIV_ID = 'toastDiv';

const Introduction: FC<Props> = ({
  setSelfIntroduction,
  setStudyPlan,
  selfIntroduction,
  studyPlan,
  history,
}) => {
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const isStateAble = useCallback(
    ({ selfIntroduction, studyPlan }) =>
      isEmptyCheck(selfIntroduction) || isEmptyCheck(studyPlan),
    [],
  );
  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isError = isStateAble(state);
      if (isError) {
        modalController.createNewToast('ERROR');
        return;
      }
      try {
        const props: MapStateToProps = {
          selfIntroduction,
          studyPlan,
        };
        await setIntroductionToServer(props);
        await setStudyPlanToServer(props);
        history.push('/preview');
      } catch (error) {
        errorTypeCheck(error);
      }
    },
    [history],
  );

  const setIntroductionToServer = useCallback(
    async (props: MapStateToProps) => {
      const request = selfIntroductionStateToRequest(props);
      return await setDataToServer<selfIntroductionServerType>(
        INTRODUCTION_URL,
        request,
      );
    },
    [],
  );

  const setStudyPlanToServer = useCallback(async (props: MapStateToProps) => {
    const request = studyPlanStateToRequest(props);
    return await setDataToServer<studyPlanServerType>(
      INTRODUCTION_URL,
      request,
    );
  }, []);
  const goCurrentPage = useCallback(() => {
    history.push('/grade');
  }, []);
  const getIntroductionAndSetState = useCallback(async () => {
    // const introductionResponse = await getDataToServer<
    //   selfIntroductionServerType
    // >(INTRODUCTION_URL);
    const response: selfIntroductionServerType = {
      self_introduction: 'asjldkfjalsdjfkajs',
    };
    const state = selfIntroductionResponseToState(response);
    setSelfIntroduction(state.selfIntroduction);
  }, []);
  const getStudyplanAndSetState = useCallback(async () => {
    // const studyPlanResponse = await getDataToServer<studyPlanServerType>(
    //   INTRODUCTION_URL,
    // );
    const response: studyPlanServerType = {
      study_plan: 'asdfasdfasdf',
    };
    const state = studyPlanResponseToState(response);
    setStudyPlan(state.studyPlan);
  }, []);
  useEffect(() => {
    getIntroductionAndSetState();
    getStudyplanAndSetState();
  }, []);
  return (
    <IntroductionDiv>
      <div id={TOAST_DIV_ID} />
      <IntroductionMain>
        <Title margin='80px'>자기소개서 & 학업계획서 작성</Title>
        <IntroductionInputTemplete
          title='자기소개서'
          describe={SELF_INTRODUCTION_DESCRIBE}
          valueChangeHandler={setSelfIntroduction}
          value={selfIntroduction}
        />
        <IntroductionInputTemplete
          title='학업계획서'
          describe={STUDY_PLAN_DESCRIBE}
          valueChangeHandler={setStudyPlan}
          value={studyPlan}
        />
        <DefaultlNavigation
          page='introduction'
          currentPageClickHandler={goCurrentPage}
          nextPageClickHandler={() =>
            goNextPage({ selfIntroduction, studyPlan })
          }
        />
      </IntroductionMain>
    </IntroductionDiv>
  );
};

export default withRouter(Introduction);
