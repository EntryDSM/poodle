import React, { useState, FC, useEffect, useCallback } from 'react';
import ResetModal from '@/components/default/common/Modal/ResetModal/ResetModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  sendEmail,
  resetState,
  verifyCode,
  resetPassword,
} from '@/core/redux/actions/ResetPassword';
import {
  EmailPage,
  VerifyCodePage,
  PasswordPage,
  PasswordCheckPage,
  SuccessPage,
} from '@/components/default/common/Modal/ResetModal';
import { RootState } from '@/core/redux/reducer';
import { useTimer } from '@/lib/utils/function';
import { passwordRegExp } from '@/lib/RegExp';

enum SendEmailError {
  '요청에 오류가 있습니다.' = 400,
  '일치하는 계정을 찾을수 없습니다.' = 404,
}

enum VerifyCodeError {
  '잘못된 인증코드입니다.' = 400,
}

const ResetModalContainer: FC<{}> = () => {
  const [page, setPage] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [
    timer,
    startTimer,
    resetTimer,
    remainedTime,
    getFormatedTime,
  ] = useTimer();
  const dispatch = useDispatch();
  const sendEmailHandler = (email: string) => {
    resetTimer();
    dispatch(sendEmail(email));
  };
  const verifyCodeHandler = (data: { email: string; auth_code: string }) => {
    if (!timer.current) return alert('인증 시간이 만료되었습니다.');
    dispatch(verifyCode(data));
  };
  const resetPasswordHandler = useCallback(
    (password: string) => {
      dispatch(resetPassword({ email, password }));
    },
    [email],
  );
  const { sendEmailValue, verifyCodeValue, resetPasswordValue } = useSelector(
    ({ ResetPassword: resetPassword, Loading: loading }: RootState) => ({
      sendEmailValue: {
        success: resetPassword.sendEmailSuccess,
        error: resetPassword.sendEmailError,
        loading: loading['resetPassword/SEND_EMAIL'],
      },
      verifyCodeValue: {
        success: resetPassword.verifyCodeSuccess,
        error: resetPassword.verifyCodeError,
        loading: loading['resetPassword/SEND_EMAIL'],
      },
      resetPasswordValue: {
        success: resetPassword.resetPasswordSuccess,
        error: resetPassword.resetPasswordError,
        loading: loading['resetPassword/RESET_PASSWORD'],
      },
    }),
  );
  const getExplainSentence = useCallback(
    (page: number) => {
      switch (page) {
        case 0:
          return sendEmailValue.success
            ? '아래의 이메일로 인증코드를 전송했습니다'
            : '본인인증 시 인증했던 이메일 주소를 입력해 주세요';
        case 1:
          return verifyCodeValue.success
            ? '이메일 인증에 성공하였습니다.'
            : '전송된 인증코드를 입력해 주세요';
        case 2:
          return '새로운 비밀번호를 입력해 주세요.';
        case 3:
          return '비밀번호를 한 번 더 입력해 주세요.';
        case 4:
          return '비밀번호 재설정이 완료되었습니다';
        default:
          return '';
      }
    },
    [sendEmailValue.success, verifyCodeValue.success],
  );
  const getErrorSentence = useCallback(
    (page: number) => {
      let status: number = 0;
      switch (page) {
        case 0:
          status = sendEmailValue.error.status;
          return SendEmailError[status];
        case 1:
          status = verifyCodeValue.error.status;
          if (status) return VerifyCodeError[status];
          if (sendEmailValue.error.status)
            return '이메일 재전송에 실패하였습니다.';
          return '';
        case 3:
          if (passwordCheck && password !== passwordCheck)
            return '비밀번호가 일치하지 않습니다.';
          if (!passwordRegExp.exec(passwordCheck))
            return '조건에 맞지 않는 비밀번호 입니다.';
          if (resetPasswordValue.error.status)
            return '비밀번호 변경에 실패하였습니다.';
        default:
          return '';
      }
    },
    [
      sendEmailValue.error,
      verifyCodeValue.error,
      password,
      passwordCheck,
      resetPasswordValue.error,
    ],
  );
  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, []);
  useEffect(() => {
    if (sendEmailValue.success) {
      let validitySecond = 180;
      startTimer(validitySecond);
    }
  }, [sendEmailValue.success]);
  useEffect(() => {
    if (verifyCodeValue.success) {
      resetTimer();
    }
  }, [verifyCodeValue.success]);
  useEffect(() => {
    if (resetPasswordValue.success) {
      setPage(4);
    }
  }, [resetPasswordValue.success]);
  if (page < 0 || page > 4) return null;
  return (
    <ResetModal
      title='비밀번호 재설정'
      contour
      color='#78cede'
      page={page}
      explainSentence={getExplainSentence(page)}
      errorSentence={getErrorSentence(page)}
      normal={
        (page === 0 || page === 1) && sendEmailValue.success
          ? getFormatedTime
          : ''
      }
      icon={page === 4 ? 'BlueSuccess' : undefined}
    >
      {(page === 0 && (
        <EmailPage
          setPage={setPage}
          email={email}
          setEmail={setEmail}
          sendEmail={sendEmailHandler}
          sendEmailValue={sendEmailValue}
        />
      )) ||
        (page === 1 && (
          <VerifyCodePage
            setPage={setPage}
            email={email}
            sendEmail={sendEmailHandler}
            verifyCode={verifyCodeHandler}
            verifyCodeValue={verifyCodeValue}
          />
        )) ||
        (page === 2 && (
          <PasswordPage
            password={password}
            setPassword={setPassword}
            setPage={setPage}
          />
        )) ||
        (page === 3 && (
          <PasswordCheckPage
            password={password}
            setPage={setPage}
            passwordCheck={passwordCheck}
            setPasswordCheck={setPasswordCheck}
            resetPassword={resetPasswordHandler}
          />
        )) ||
        (page === 4 && <SuccessPage />)}
    </ResetModal>
  );
};

export default ResetModalContainer;
