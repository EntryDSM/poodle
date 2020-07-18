import React, { FC, useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
  setDataToServer,
  infoStateToRequest,
  infoStateToGedRequest,
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
import ErrorType from '@/lib/utils/type/ErrorType';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const Info: FC<Props> = props => {
  const dispatch = useDispatch();
  const [isError, errorChange] = useState<boolean>(false);
  const [errorModal, errorModalChange] = useState<boolean>(false);

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
          isEmptyCheck(address) &&
          isEmptyCheck(postNum) &&
          isEmptyCheck(detailAddress) &&
          isEmptyCheck(name) &&
          isEmptyCheck(birthday) &&
          isEmptyCheck(protectorName) &&
          isEmptyCheck(protectorName) &&
          isEmptyCheck(phoneNum) &&
          isEmptyCheck(gender) &&
          isEmptyCheck(protectorPhoneNum) &&
          isEmptyCheck(picture)
        );
      }
      return (
        isEmptyCheck(postNum) &&
        isEmptyCheck(detailAddress) &&
        isEmptyCheck(address) &&
        isEmptyCheck(name) &&
        isEmptyCheck(birthday) &&
        isEmptyCheck(middleSchool) &&
        isEmptyCheck(protectorName) &&
        isEmptyCheck(schoolPhoneNum) &&
        isEmptyCheck(protectorName) &&
        isEmptyCheck(phoneNum) &&
        isEmptyCheck(gender) &&
        isEmptyCheck(protectorPhoneNum) &&
        isEmptyCheck(number) &&
        isEmptyCheck(picture)
      );
    },
    [isEmptyCheck, isFileAble],
  );

  const errorModalStateChangeLater = useCallback(state => {
    setTimeout(() => {
      errorModalChange(state);
    }, 5000);
  }, []);

  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isAble = isStateAble(state);
      if (!isAble) {
        errorChange(true);
        errorModalChange(true);
        errorModalStateChangeLater(false);
      } else {
        try {
          await setInfo(state);
          props.history.push('/grade');
        } catch (errorResponse) {
          const error: ErrorType = {
            message: '',
            response: {
              status: errorResponse.response.status,
            },
          };
          props.infoFailure(error);
        }
      }
    },
    [isStateAble, errorModalStateChangeLater, props],
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
  useEffect(() => {
    props.getInfo();
  }, []);
  return (
    <InfoDiv>
      <div id='popup' />
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
