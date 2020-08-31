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
  error,
  page,
  getStudyPlanToServer,
  setStudyPlanToServer,
  setSelfIntroductionToServer,
  getSelfIntroductionToServer,
  successDate,
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
        await setSelfIntroductionToServer();
        await setStudyPlanToServer();
      } catch (error) {
        errorTypeCheck(error);
      }
    },
    [history],
  );
  const goCurrentPage = useCallback(() => {
    history.push('/grade');
  }, [page]);
  useEffect(() => {
    getStudyPlanToServer();
    getSelfIntroductionToServer();
  }, []);
  useEffect(() => {
    if (page != null) {
      history.push(`/${page}`);
    }
  }, [page]);
  useEffect(() => {
    if (!error) return;
    modalController.createNewToast('SERVER_ERROR');
  }, [error]);
  useEffect(() => {
    if (!successDate) return;
    modalController.createNewToast('SUCCESS');
  }, [successDate]);
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
              page,
              successDate,
            })
          }
        />
      </IntroductionMain>
    </IntroductionDiv>
  );
};

export default withRouter(Introduction);
