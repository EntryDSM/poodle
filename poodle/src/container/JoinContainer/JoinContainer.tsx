import React, { useCallback } from 'react';
import Join from '@/components/Join/Join';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import {
  sendEmail,
  verifyCode,
  joinValueReset,
  join,
} from '@/core/redux/actions/Join';

function JoinContainer() {
  const dispatch = useDispatch();
  const { sendEmailValue, verifyCodeValue, joinValue } = useSelector(
    ({ Join: join, Loading: loading }: RootState) => ({
      sendEmailValue: {
        success: join.sendEmailSuccess,
        error: join.sendEmailError,
        loading: loading['join/SEND_EMAIL'],
      },
      verifyCodeValue: {
        success: join.verifyCodeSuccess,
        error: join.verifyCodeError,
        loading: loading['join/VERIFY_CODE'],
      },
      joinValue: {
        success: join.joinSuccess,
        error: join.joinError,
        loading: loading['join/JOIN'],
      },
    }),
  );

  const sendEmailHandler = useCallback((email: string) => {
    dispatch(sendEmail(email));
  }, []);

  const verifyCodeHandler = useCallback(
    (data: { email: string; code: string }) => {
      dispatch(verifyCode(data));
    },
    [],
  );

  const joinValueResetHandler = useCallback(
    () => dispatch(joinValueReset()),
    [],
  );

  const joinHandler = useCallback(
    (data: { email: string; password: string }) => {
      dispatch(join(data));
    },
    [],
  );

  return (
    <Join
      sendEmail={sendEmailHandler}
      sendEmailValue={sendEmailValue}
      verifyCode={verifyCodeHandler}
      verifyCodeValue={verifyCodeValue}
      joinValueReset={joinValueResetHandler}
      join={joinHandler}
      joinValue={joinValue}
    />
  );
}

export default JoinContainer;
