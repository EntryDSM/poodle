import React, { FC, useCallback, useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { errorTypeCheck } from '@/lib/api/ApplicationApplyApi';
import ModalContainer from '@/container/common/ModalContainer/ModalContainer';
import { modalOff, REDERRORMODAL } from '@/core/redux/actions/Modal';
import { InfoDiv, InfoBody } from '../../styles/Info';
import {
  Title,
  DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import { mapStateToProps, mapDispatchToProps } from './ConnectInfo';
import { QualificationPage, DefaultPage } from '../../components/Info/Page';
import {
  isEmptyCheck,
  allPhoneNumCheck,
  useReGenerateTokenAndDoCallback,
} from '../../lib/utils/function';
import ToastController from '../common/ToastContainer';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const TOAST_DIV_ID = 'toastDivInfo';

const Info: FC<Props> = props => {
  const history = useHistory();
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
      gender,
      middleSchool,
      protectorName,
      picture,
      schoolPhoneNum,
      protectorPhoneNum,
      phoneNum,
      postNum,
      gradeType,
      detailAddress,
      pictureUrl,
      homePhoneNumber,
    }: Props): boolean => {
      if (gradeType === 'GED') {
        return (
          isEmptyCheck(address) ||
          isEmptyCheck(postNum) ||
          isEmptyCheck(detailAddress) ||
          isEmptyCheck(name) ||
          isEmptyCheck(protectorName) ||
          isEmptyCheck(phoneNum) ||
          isEmptyCheck(gender) ||
          isEmptyCheck(protectorPhoneNum) ||
          isEmptyCheck(pictureUrl) ||
          isEmptyCheck(homePhoneNumber)
        );
      }
      return (
        isEmptyCheck(postNum) ||
        isEmptyCheck(detailAddress) ||
        isEmptyCheck(address) ||
        isEmptyCheck(name) ||
        isEmptyCheck(middleSchool) ||
        isEmptyCheck(protectorName) ||
        isEmptyCheck(schoolPhoneNum) ||
        isEmptyCheck(protectorName) ||
        isEmptyCheck(phoneNum) ||
        isEmptyCheck(gender) ||
        isEmptyCheck(protectorPhoneNum) ||
        isEmptyCheck(number) ||
        isEmptyCheck(pictureUrl) ||
        isEmptyCheck(homePhoneNumber)
      );
    },
    [isEmptyCheck, isFileAble],
  );

  const goNextPage = useCallback(
    async (props: Props) => {
      const isError = isStateAble(props);
      const isPhoneNumError = allPhoneNumCheck(props);
      if (isError) {
        errorChange(isError);
        modalController.createNewToast('ERROR');
      } else if (!isPhoneNumError) {
        modalController.createNewToast('PHONE_NUM_ERROR');
      } else {
        try {
          await props.setInfoToServer(true);
        } catch (error) {
          errorTypeCheck(error);
        }
      }
    },
    [isStateAble],
  );
  const modalOffDispatch = useCallback(() => {
    dispatch(modalOff(REDERRORMODAL));
  }, [dispatch]);
  const goCurrentPage = useCallback(() => {
    props.history.push('/Type');
  }, []);

  const setInfoGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    () => props.setInfoToServer(false),
  );
  const getInfoGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    props.getInfoToServer,
  );
  const renderPage = useCallback(
    gradeType => {
      if (gradeType === 'GED')
        return <QualificationPage {...props} isError={isError} />;
      else if (gradeType === 'GRADUATED' || gradeType === 'UNGRADUATED')
        return <DefaultPage {...props} isError={isError} />;
      else return <div></div>;
    },
    [props, isError],
  );
  useEffect(() => {
    props.getInfoToServer();
  }, []);
  useEffect(() => {
    if (props.status) {
      alert('최종 제출 하셨습니다.');
      history.push('/');
    }
  }, [props.status]);
  useEffect(() => {
    if (!props.error) return;
    if (props.error.status === 401) {
      if (props.setInfoError.status === 401)
        setInfoGenerateTokenAndDoCallback();
      if (props.getInfoError.status === 401)
        getInfoGenerateTokenAndDoCallback();
      return;
    }
    modalController.createNewToast('SERVER_ERROR');
  }, [props.error, props.getInfoError, props.setInfoError]);
  useEffect(() => {
    if (!props.successTime) return;
    modalController.createNewToast('SUCCESS');
  }, [props.successTime]);
  useEffect(() => {
    if (props.pageMove) {
      history.push('/grade');
      modalController.resetToast();
      props.pageMoveChange(false);
    }
  }, [props.pageMove]);
  return (
    <InfoDiv>
      <div id={TOAST_DIV_ID} />
      <InfoBody>
        <Title margin='80px'>인적사항</Title>
        {renderPage(props.gradeType)}
        <DefaultlNavigation
          page='info'
          currentPageClickHandler={goCurrentPage}
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
