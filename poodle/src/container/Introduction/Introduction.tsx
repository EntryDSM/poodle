import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { errorTypeCheck } from '@/lib/api/ApplicationApplyApi';
import {
  Title,
  DefaultlNavigation,
} from '@/components/default/ApplicationFormDefault';
import { IntroductionDiv, IntroductionMain } from '@/styles/Introduction';
import { IntroductionInputTemplete } from '@/components/Introduction';
import {
  SELF_INTRODUCTION_DESCRIBE,
  STUDY_PLAN_DESCRIBE,
} from '@/components/Introduction/constance';
import { mapDispatchToProps, mapStateToProps } from './ConnectIntroduction';
import {
  isEmptyCheck,
  useReGenerateTokenAndDoCallback,
} from '../../lib/utils/function';
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
  error,
  getStudyPlanToServer,
  setStudyPlanToServer,
  setSelfIntroductionToServer,
  getSelfIntroductionToServer,
  successDate,
  setSelfIntroductionError,
  setStudyPlanError,
  getSelfIntroductionError,
  getStudyPlanError,
  pageMoveChange,
  pageMove,
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
        await setSelfIntroductionToServer(true);
        await setStudyPlanToServer(true);
      } catch (error) {
        errorTypeCheck(error);
      }
    },
    [history],
  );
  const goCurrentPage = useCallback(() => {
    history.push('/grade');
  }, []);
  const getSelfIntroductionGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    getSelfIntroductionToServer,
  );
  const getStudyPlanGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    getStudyPlanToServer,
  );
  const setSelfIntroductionGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => setSelfIntroductionToServer(false),
  );
  const setStudyPlanGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => setStudyPlanToServer(false),
  );
  useEffect(() => {
    getStudyPlanToServer();
    getSelfIntroductionToServer();
  }, []);
  useEffect(() => {
    if (!error) return;
    if (error.status === 401) {
      if (setSelfIntroductionError.status === 401)
        setSelfIntroductionGenerateTokenAndDoCallback();
      if (setStudyPlanError.status === 401)
        setStudyPlanGenerateTokenAndDoCallback();
      if (getSelfIntroductionError.status === 401)
        getSelfIntroductionGenerateTokenAndDoCallback();
      if (getStudyPlanError.status === 401)
        getStudyPlanGenerateTokenAndDoCallback();
      return;
    }
    modalController.createNewToast('SERVER_ERROR');
  }, [error]);
  useEffect(() => {
    if (!successDate) return;
    modalController.createNewToast('SUCCESS');
  }, [successDate]);
  useEffect(() => {
    if (pageMove) {
      history.push('/preview');
      pageMoveChange(false);
    }
  }, [pageMove]);
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
            goNextPage({
              selfIntroduction,
              studyPlan,
              error,
              successDate,
              setSelfIntroductionError,
              getSelfIntroductionError,
              setStudyPlanError,
              getStudyPlanError,
              pageMove,
            })
          }
        />
      </IntroductionMain>
    </IntroductionDiv>
  );
};

export default withRouter(Introduction);
