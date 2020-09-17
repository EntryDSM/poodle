import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  Title,
  DefaultlNavigation,
} from '@/components/default/ApplicationFormDefault';
import { TypeDiv, TypeMain } from '@/styles/ChoiceType';
import {
  ChoiceTypeRow,
  ChoiceDistrict,
  GraduationStatus,
  GraduationYear,
  Specialty,
  ChoiceTypeGEDYear,
} from '@/components/ChoiceType/RowType';
import { mapStateToProps, mapDispatchToProps } from './ConnectChoiceType';
import {
  getIsFinish,
  getIsStarted,
  isEmptyCheck,
  useReGenerateTokenAndDoCallback,
} from '@/lib/utils/function';
import ToastController from '../common/ToastContainer';
import {
  GraduationStatusType,
  setIsQualification,
} from '@/core/redux/actions/ChoiceType';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDivType';
let isButtonClick = false;

const ChoiceType: FC<Props> = props => {
  const {
    applyType,
    district,
    graduationStatus,
    graduationYear,
    graduationMonth,
    additionalType,
    gedSuccessMonth,
    gedSuccessYear,
    setApplyType,
    setDistrict,
    setGraduationStatus,
    setGraduationYear,
    setGraduationMonth,
    setAdditionalType,
    setGEDSuccessMonth,
    setGEDSuccessYear,
    history,
    error,
    status,
    getTypeError,
    setTypeError,
    setTypeToServer,
    getTypeToServer,
    pageMove,
    pageMoveChange,
    setSuccessDate,
  } = props;
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const isStateAble = useCallback(
    ({
      qualificationExam,
      applyType,
      district,
      graduationStatus,
      graduationYear,
    }: MapStateToProps): boolean => {
      if (qualificationExam) {
        return isEmptyCheck(applyType) || isEmptyCheck(district);
      }
      return (
        isEmptyCheck(graduationStatus) ||
        isEmptyCheck(applyType) ||
        isEmptyCheck(district) ||
        isEmptyCheck(graduationYear)
      );
    },
    [],
  );
  const goNextPage = useCallback(
    async (state: Props) => {
      const isError = isStateAble(state);
      if (isError) {
        modalController.createNewToast('ERROR');
        return;
      }
      isButtonClick = true;
      await setTypeToServer(true);
    },
    [props, isStateAble, history, modalController],
  );
  const graduationStatusChangeHandler = useCallback((status: string) => {
    if (status === 'UNGRADUATED') {
      setGraduationYear('2021');
      setGraduationMonth('01');
      setIsQualification({ qualification: false });
    } else if (status === 'GRADUATED') {
      setGraduationYear('2020');
      setGraduationMonth('01');
      setIsQualification({ qualification: false });
    }
    setIsQualification({ qualification: true });
    setGraduationStatus(status as GraduationStatusType);
  }, []);
  const getYearRow = (): React.ReactNode => {
    if (graduationStatus !== 'GED') {
      return (
        <GraduationYear
          describe='*졸업자의 경우 졸업연도를 선택해주세요.'
          graduationYearChange={setGraduationYear}
          graduationMonthChange={setGraduationMonth}
          graduationMonth={graduationMonth}
          graduationYear={graduationYear}
          isUngraduated={graduationStatus !== 'UNGRADUATED'}
        />
      );
    } else if (graduationStatus === 'GED') {
      return (
        <ChoiceTypeGEDYear
          describe='*검정고시 합격일자를 선택해주세요.'
          year={gedSuccessYear}
          month={gedSuccessMonth}
          yearChangeHandler={setGEDSuccessYear}
          monthChangeHandler={setGEDSuccessMonth}
        />
      );
    }
    return <></>;
  };

  const getTypeGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    getTypeToServer,
  );
  const setTypeGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => setTypeToServer(false),
  );
  const setTypeAndMovePageGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => {
      setTypeToServer(true);
      isButtonClick = false;
    },
  );

  useEffect(() => {
    getTypeToServer();
  }, []);

  useEffect(() => {
    if (status) {
      alert('최종 제출 하셨습니다.');
      history.push('/');
    } else if (getIsFinish()) {
      alert('종료 되었습니다.');
      history.push('/');
    } else if (!getIsStarted()) {
      alert('시작 하지 않았습니다.');
      history.push('/');
    }
  }, [status]);
  useEffect(() => {
    if (!props.successTime) return;
    modalController.createNewToast('SUCCESS');
  }, [props.successTime]);

  useEffect(() => {
    if (pageMove) {
      history.push('/info');
      modalController.resetToast();
      pageMoveChange(false);
      setSuccessDate(null);
    }
  }, [pageMove]);

  useEffect(() => {
    if (!error) return;
    if (error.status === 401) {
      if (getTypeError.status === 401) getTypeGenerateTokenAndDoCallback();
      if (setTypeError.status === 401 && !isButtonClick)
        setTypeGenerateTokenAndDoCallback();
      else if (setTypeError.status === 401 && isButtonClick)
        setTypeAndMovePageGenerateTokenAndDoCallback();
      return;
    }
    modalController.createNewToast('SERVER_ERROR');
  }, [error, getTypeError, setTypeError]);
  return (
    <TypeDiv>
      <div id={TOAST_DIV_ID} />
      <TypeMain>
        <Title margin='80px'>전형 구분 선택</Title>
        <li>
          <ChoiceTypeRow
            valueChangeHandler={setApplyType}
            applyType={applyType}
          />
          <ChoiceDistrict
            valueChangeHandler={setDistrict}
            district={district}
          />
          <GraduationStatus
            valueChangeHandler={graduationStatusChangeHandler}
            graduationStatus={graduationStatus}
          />
          {getYearRow()}
          <Specialty
            describe='*해당하는 특기사항에 체크해주세요.'
            additionalType={additionalType}
            additionalTypeChange={setAdditionalType}
          />
        </li>
        <DefaultlNavigation
          page='choiceType'
          currentPageClickHandler={() => {
            history.push('/');
          }}
          nextPageClickHandler={() => {
            goNextPage(props);
          }}
        />
      </TypeMain>
    </TypeDiv>
  );
};

export default withRouter(ChoiceType);
