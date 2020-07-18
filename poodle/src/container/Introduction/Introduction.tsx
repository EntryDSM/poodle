import React, { FC, useCallback, useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import {
  selfIntroductionServerType,
  studyPlanServerType,
} from '@/lib/api/ApiType';
import {
  selfIntroductionStateToRequest,
  studyPlanStateToRequest,
  setDataToServer,
} from '@/lib/api/ApplicationApplyApi';
import { SELF_INTRODUCTION_URL, STUDY_PLAN_URL } from '@/lib/api/ServerUrl';
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

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const Introduction: FC<Props> = ({
  setSelfIntroduction,
  setStudyPlan,
  getStudyPlan,
  getSelfIntroduction,
  selfIntroduction,
  studyPlan,
  history,
}) => {
  const [errorModal, errorModalChange] = useState<boolean>(false);
  const isStateAble = useCallback(
    ({ selfIntroduction, studyPlan }) =>
      isEmptyCheck(selfIntroduction) && isEmptyCheck(studyPlan),
    [],
  );
  const goNextPage = useCallback(async (state: MapStateToProps) => {
    const isAble = isStateAble(state);
    if (!isAble) {
      errorModalChange(true);
      errorModalStateChangeLater(false);
    } else {
      try {
        const props = {
          setSelfIntroduction,
          setStudyPlan,
          selfIntroduction,
          studyPlan,
          history,
        };
        await setIntroductionToServer(props);
        await setStudyPlanToServer(props);
        props.history.push('/preview');
      } catch (error) {}
    }
  }, []);

  const setIntroductionToServer = useCallback(async (props: any) => {
    const request = selfIntroductionStateToRequest(props);
    return await setDataToServer<selfIntroductionServerType>(
      SELF_INTRODUCTION_URL,
      request,
    );
  }, []);

  const setStudyPlanToServer = useCallback(async (props: any) => {
    const request = studyPlanStateToRequest(props);
    return await setDataToServer<studyPlanServerType>(STUDY_PLAN_URL, request);
  }, []);

  const errorModalStateChangeLater = useCallback(state => {
    setTimeout(() => {
      errorModalChange(state);
    }, 5000);
  }, []);
  const goCurrentPage = useCallback(() => {
    history.push('/grade');
  }, []);
  useEffect(() => {
    getStudyPlan();
    getSelfIntroduction();
  }, []);
  return (
    <IntroductionDiv>
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
