import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  setDataToServer,
  typeStateToRequest,
} from '@/lib/api/ApplicationApplyApi';
import { USERTYPE_URL } from '@/lib/api/ServerUrl';
import {
  Title,
  DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { TypeDiv, TypeMain } from '../../styles/ChoiceType';
import {
  ChoiceTypeRow,
  ChoiceDistrict,
  GraduationStatus,
  GraduationYear,
  Specialty,
} from '../../components/ChoiceType/RowType';
import { mapStateToProps, mapDispatchToProps } from './ConnectChoiceType';
import { isEmptyCheck } from '../../lib/utils/function';
import ToastController from '../common/ToastContainer';
import { GraduationStatusType } from '@/core/redux/actions/ChoiceType';
import ErrorType from '@/lib/utils/type/ErrorType';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDiv';

const ChoiceType: FC<Props> = props => {
  const {
    qualificationExam,
    applyType,
    district,
    graduationStatus,
    graduationYear,
    additionalType,
    setApplyType,
    setDistrict,
    setGraduationStatus,
    setGraduationYear,
    setAdditionalType,
    setTypeFailure,
    setTypeSuccess,
    history,
    getType,
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
        return !(isEmptyCheck(applyType) && isEmptyCheck(district));
      }
      return !(
        isEmptyCheck(graduationStatus) &&
        isEmptyCheck(applyType) &&
        isEmptyCheck(district) &&
        isEmptyCheck(graduationYear)
      );
    },
    [],
  );
  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isError = isStateAble(state);
      if (isError) {
        modalController.createNewToast('ERROR');
        return;
      }
      const request = typeStateToRequest(props);
      try {
        await setDataToServer(USERTYPE_URL, request);
        setTypeSuccess();
        history.push('/Info');
      } catch (errorResponse) {
        const error: ErrorType = {
          message: '',
          response: {
            status: errorResponse.response.status,
          },
        };
        setTypeFailure(error);
      }
    },
    [props, isStateAble, history, modalController],
  );
  const graduationStatusChangeHandler = useCallback((status: string) => {
    if (status === 'ungraduated') {
      setGraduationYear('2021');
    } else {
      setGraduationYear('2020');
    }
    setGraduationStatus(status as GraduationStatusType);
  }, []);
  useEffect(() => {
    getType();
  }, []);
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
          {graduationStatus !== 'graduated' ? (
            ''
          ) : (
            <>
              <GraduationYear
                describe='*졸업자의 경우 졸업연도를 선택해주세요.'
                valueChangeHandler={setGraduationYear}
                graduationYear={graduationYear}
              />
            </>
          )}
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
            goNextPage({
              qualificationExam,
              applyType,
              district,
              graduationStatus,
              graduationYear,
              additionalType,
            });
          }}
        />
      </TypeMain>
    </TypeDiv>
  );
};

export default withRouter(ChoiceType);
