import React, { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  getDataToServer,
  infoResponseToState,
  setDataToServer,
  infoStateToRequest,
  infoStateToGedRequest,
  errorTypeCheck,
} from '@/lib/api/ApplicationApplyApi';
import ModalContainer from '@/container/common/ModalContainer/ModalContainer';
import { userInfoServerType, gedInfoServerType } from '@/lib/api/ApiType';
import { USERINFO_URL } from '@/lib/api/ServerUrl';
import { modalOff, REDERRORMODAL } from '@/core/redux/actions/modal';
import { InfoDiv, InfoBody } from '../../styles/Info';
import {
  Title,
  DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { mapStateToProps, mapDispatchToProps } from './ConnectInfo';
import { QualificationPage, DefaultPage } from '../../components/Info/Page';
import { isEmptyCheck } from '../../lib/utils/function';
import ToastController from '../common/ToastContainer';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDiv';

const Info: FC<Props> = props => {
  const modalController = useMemo(() => new ToastController(TOAST_DIV_ID), []);
  const dispatch = useDispatch();
  const [isError, errorChange] = useState<boolean>(false);

  const isFileAble = useCallback((file: File | null) => {
    if (file) {
      return true;
    }
    return false;
  }, []);

  const isStateAble = useCallback(
    ({
      address,
      number,
      name,
      birthday,
      gender,
      middleSchool,
      protectorName,
      picture,
      schoolPhoneNum,
      protectorPhoneNum,
      phoneNum,
      postNum,
      detailAddress,
    }: MapStateToProps): boolean => {
      if (props.isQualification) {
        return (
          isEmptyCheck(address) ||
          isEmptyCheck(postNum) ||
          isEmptyCheck(detailAddress) ||
          isEmptyCheck(name) ||
          isEmptyCheck(birthday) ||
          isEmptyCheck(protectorName) ||
          isEmptyCheck(protectorName) ||
          isEmptyCheck(phoneNum) ||
          isEmptyCheck(gender) ||
          isEmptyCheck(protectorPhoneNum) ||
          isEmptyCheck(picture)
        );
      }
      return (
        isEmptyCheck(postNum) ||
        isEmptyCheck(detailAddress) ||
        isEmptyCheck(address) ||
        isEmptyCheck(name) ||
        isEmptyCheck(birthday) ||
        isEmptyCheck(middleSchool) ||
        isEmptyCheck(protectorName) ||
        isEmptyCheck(schoolPhoneNum) ||
        isEmptyCheck(protectorName) ||
        isEmptyCheck(phoneNum) ||
        isEmptyCheck(gender) ||
        isEmptyCheck(protectorPhoneNum) ||
        isEmptyCheck(number) ||
        isEmptyCheck(picture)
      );
    },
    [isEmptyCheck, isFileAble],
  );

  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isError = isStateAble(state);
      if (isError) {
        errorChange(isError);
        modalController.createNewToast('ERROR');
      } else {
        try {
          await setInfo(state);
          props.history.push('/grade');
        } catch (error) {
          errorTypeCheck(error);
        }
      }
    },
    [isStateAble, props],
  );

  const setInfo = useCallback(async (props: any) => {
    if (props.isQualification) {
      const request = infoStateToGedRequest(props);
      return await setDataToServer<gedInfoServerType>(USERINFO_URL, request);
    }
    const request = infoStateToRequest(props);
    return await setDataToServer<userInfoServerType>(USERINFO_URL, request);
  }, []);
  const modalOffDispatch = useCallback(() => {
    dispatch(modalOff(REDERRORMODAL));
  }, [dispatch]);
  const getInfoAndSetState = useCallback(async () => {
    // const response = await getDataToServer<userInfoServerType>(USERINFO_URL);
    const response: userInfoServerType = {
      name: '오준상',
      sex: 'male',
      birth_date: '2020-06-27',
      student_number: '30122',
      school_name: '어디 중학교',
      parent_name: '배덕희',
      school_tel: '01073030413',
      applicant_tel: '01073030413',
      parent_tel: '01022341231',
      address: '어딘가',
      photo: '',
      post_code: '34111',
      detail_address: '어디어딘가',
    };
    const state = infoResponseToState(response);
    props.setAll(state);
  }, []);
  useEffect(() => {
    getInfoAndSetState();
  }, []);
  return (
    <InfoDiv>
      <div id={TOAST_DIV_ID} />
      <InfoBody>
        <Title margin='80px'>인적사항</Title>
        {props.isQualification ? (
          <QualificationPage {...props} isError={isError} />
        ) : (
          <DefaultPage {...props} isError={isError} />
        )}
        <DefaultlNavigation
          page='info'
          currentPageClickHandler={() => {
            props.history.push('/Type');
          }}
          nextPageClickHandler={() => {
            goNextPage(props);
          }}
        />
      </InfoBody>
      <ModalContainer onClick={modalOffDispatch} />
    </InfoDiv>
  );
};

export default withRouter(Info);
