import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
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
  getIsFinish,
  getIsStarted,
  isEmptyCheck,
  useReGenerateTokenAndDoCallback,
} from '../../lib/utils/function';
import ToastController from '../common/ToastContainer';
import { modalOn, NOTICE_MODAL, modalOff } from '@/core/redux/actions/Modal';
import { useDispatch } from 'react-redux';

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;
const TOAST_DIV_ID = 'toastDivIntroduction';

const Introduction: FC<Props> = props => {
  const {
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
  } = props;
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const isStateAble = useCallback(
    ({ selfIntroduction, studyPlan }) =>
      isEmptyCheck(selfIntroduction) || isEmptyCheck(studyPlan),
    [],
  );
  const goNextPage = useCallback(
    async (state: Props) => {
      const isError = isStateAble(state);
      if (isError) {
        modalController.createNewToast('ERROR');
        return;
      }
      await setSelfIntroductionToServer(true);
      await setStudyPlanToServer(true);
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
  }, [
    error,
    getSelfIntroductionError,
    getStudyPlanError,
    setSelfIntroductionError,
    setStudyPlanError,
  ]);
  useEffect(() => {
    if (!successDate) return;
    modalController.createNewToast('SUCCESS');
  }, [successDate]);
  useEffect(() => {
    if (pageMove) {
      history.push('/preview');
      modalController.resetToast();
      pageMoveChange(false);
      props.setSuccessDate(null);
    }
  }, [pageMove]);
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
  const dispatch = useDispatch();
  const noticeModalOn = useCallback(() => {
    dispatch(modalOn(NOTICE_MODAL));
  }, [dispatch]);
  const noticeModalOff = useCallback(() => {
    dispatch(modalOff(NOTICE_MODAL));
  }, [dispatch]);
  useEffect(() => {
    const isReadNotice = localStorage.getItem('isReadNotice');
    if (isReadNotice) return;
    noticeModalOn();
    return () => noticeModalOff();
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
          nextPageClickHandler={() => goNextPage(props)}
        />
      </IntroductionMain>
    </IntroductionDiv>
  );
};

export default withRouter(Introduction);
