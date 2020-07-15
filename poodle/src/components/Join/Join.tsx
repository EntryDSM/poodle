import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import ContentHeader from '@/components/default/common/ContentHeader';
import JoinInput from './JoinInput';
import * as S from '@/styles/Join';
import {
  AGREEMENT_TITLE1,
  AGREEMENT_TITLE2,
  AGREEMENT_1,
  AGREEMENT_2,
  AGREEMENT_3,
} from './JoinConstance';
import ErrorType from '@/lib/utils/type/ErrorType';
import {
  inputReducer,
  inputInitialState,
  setInputEmail,
  setInputCode,
  setInputPassword,
  setInputPasswordCheck,
} from './inputReducer';
import {
  disabledReducer,
  disabledInitialState,
  setDisabledEmail,
  resetDisabledState,
  setDisabledCode,
  setDisabledPassword,
  setDisabledPasswordCheck,
} from './disabledReducer';
import {
  focusedReducer,
  focusedInitialState,
  setFocusedEmail,
  resetFocusedState,
  setFocusedCode,
  setFocusedPassword,
  setFocusedPasswordCheck,
} from './focusedReducer';
import { useRedirect } from '@/lib/utils/function';
type JoinReduxType = {
  success: boolean;
  error: ErrorType;
  loading: boolean;
};

export type JoinProps = {
  sendEmail: Function;
  sendEmailValue: JoinReduxType;
  verifyCode: Function;
  verifyCodeValue: JoinReduxType;
  joinValueReset: Function;
  join: Function;
  joinValue: JoinReduxType;
};

const emailRegExp = new RegExp('.{1}@.{1}');
const passwordRegExp = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$');
const lPad = (str: string, padLen: Number, padStr: string) => {
  while (str.length < padLen) str = padStr + str;
  return str;
};

const Join: React.FC<JoinProps> = ({
  sendEmail,
  sendEmailValue,
  verifyCode,
  verifyCodeValue,
  joinValueReset,
  join,
  joinValue,
}) => {
  const redirectToLink = useRedirect();
  const goToMain = useCallback(() => {
    redirectToLink('/');
  }, []);
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState,
  );
  const [disabledState, disabledDispatch] = useReducer(
    disabledReducer,
    disabledInitialState,
  );
  const [focusedState, focusedDispatch] = useReducer(
    focusedReducer,
    focusedInitialState,
  );
  const [isAgrreed, setIsAgrreed] = useState(false);
  const [isChecked, setIsChecked] = useState({
    email: false,
    code: false,
  });
  const [remainedTime, setRemainedTime] = useState(0);
  const [inputFocused, setInputFocused] = useState({
    password: false,
    passwordCheck: false,
  });
  const isAvailable = useMemo(() => {
    return isAgrreed &&
      isChecked.code &&
      isChecked.email &&
      passwordRegExp.exec(inputState.password) &&
      inputState.password === inputState.passwordCheck
      ? true
      : false;
  }, [
    isChecked.code,
    isChecked.email,
    inputState.password,
    inputState.passwordCheck,
    isAgrreed,
  ]);
  const getFormatedTime = useMemo(() => {
    const ONE_MINUTE = 60;
    const minute = Math.floor(remainedTime / ONE_MINUTE) + '';
    const second = (remainedTime % ONE_MINUTE) + '';

    return `${lPad(minute, 2, '0')}:${lPad(second, 2, '0')}`;
  }, [remainedTime]);

  const timer = useRef(0);
  const emailPrevRef = useRef<null | any>(null);
  const codePrevRef = useRef<null | any>(null);
  const passwordPrevRef = useRef<null | any>(null);
  const passwordCheckPrevRef = useRef<null | any>(null);
  const isReSendType = useRef<boolean>(false);

  const agreeJoin = useCallback(() => {
    if (!isAgrreed) {
      setIsAgrreed(true);
      class Emphasizer {
        public static email() {
          focusedDispatch(setFocusedEmail(true));
          disabledDispatch(setDisabledEmail(false));
          setTimeout(() => emailPrevRef.current.nextSibling.focus(), 1);
        }
        public static code() {
          focusedDispatch(setFocusedCode(true));
          disabledDispatch(setDisabledCode(false));
          setTimeout(() => codePrevRef.current.nextSibling.focus(), 1);
        }
        public static password() {
          console.log(10100101);
          this.focusAndDisableRelatedPassword();
          setTimeout(() => passwordPrevRef.current.nextSibling.focus(), 1);
        }
        public static passwordCheck() {
          this.focusAndDisableRelatedPassword();
          setTimeout(() => passwordCheckPrevRef.current.nextSibling.focus(), 1);
        }
        public static focusAndDisableRelatedPassword() {
          focusedDispatch(setFocusedPassword(true));
          focusedDispatch(setFocusedPasswordCheck(true));
          disabledDispatch(setDisabledPassword(false));
          disabledDispatch(setDisabledPasswordCheck(false));
        }
      }

      type inputStateKeyType = 'email' | 'code' | 'password' | 'passwordCheck';
      for (const [key, value] of Object.entries(inputState) as [
        inputStateKeyType,
        string,
      ][]) {
        if (
          ((key === 'email' || key === 'code') && !isChecked[key]) ||
          !value ||
          ((key === 'password' || key === 'passwordCheck') &&
            !passwordRegExp.exec(value))
        ) {
          console.log(key);
          Emphasizer[key]();
          break;
        }
        if (key === 'passwordCheck') {
          Emphasizer.passwordCheck();
        }
      }
      return;
    }
    setIsAgrreed(false);
    focusedDispatch(resetFocusedState());
    disabledDispatch(resetDisabledState());
  }, [isAgrreed, disabledState, focusedState, inputState]);
  const resetTimer = useCallback(() => {
    clearInterval(timer.current);
    timer.current = 0;
    setRemainedTime(0);
  }, []);
  const sendEmailClickHandler = useCallback(() => {
    if (isChecked.code) return null;
    const email = inputState.email.trim();
    if (focusedState.code) isReSendType.current = true;
    if (!emailRegExp.exec(email)) {
      return alert('이메일 형식이 옳바르지 않습니다.');
    }
    resetTimer();
    sendEmail(email);
  }, [isChecked.code, inputState.email, focusedState.code]);
  const verifyCodeClickHandler = useCallback(() => {
    if (isChecked.code || !focusedState.code) return null;
    const code = inputState.code.trim();
    if (code.length !== 5) return alert('인증코드 형식이 옳바르지 않습니다.');
    if (!timer.current) return alert('인증 시간이 만료되었습니다.');
    verifyCode({ email: inputState.email, code });
  }, [inputState.email, inputState.code, isChecked.code, focusedState.code]);
  const joinClickHandler = useCallback(() => {
    if (isAvailable)
      return join({
        email: inputState.email,
        password: inputState.password,
      });
    alert('빈칸이 모두 채워지지 않았거나 약관에 동의하지 않으셨습니다.');
  }, [isAvailable, inputState]);
  useEffect(() => {
    if (sendEmailValue.success) {
      let validitySecond = 10;
      if (!timer.current) {
        setRemainedTime(validitySecond);
        timer.current = setInterval(() => {
          if (!validitySecond) return resetTimer();
          setRemainedTime(--validitySecond);
        }, 1000);
      }
      setTimeout(() => {
        codePrevRef.current.nextSibling.focus();
      }, 1);
      setIsChecked({
        ...isChecked,
        email: true,
      });
      focusedDispatch(setFocusedCode(true));
      disabledDispatch(setDisabledCode(false));
    }
    if (verifyCodeValue.success) {
      resetTimer();
      setTimeout(() => {
        passwordPrevRef.current.nextSibling.focus();
      }, 1);
      focusedDispatch(setFocusedPassword(true));
      focusedDispatch(setFocusedPasswordCheck(true));
      disabledDispatch(setDisabledPassword(false));
      disabledDispatch(setDisabledPasswordCheck(false));
      setIsChecked({
        ...isChecked,
        code: true,
      });
    }
  }, [sendEmailValue.success, verifyCodeValue.success]);
  useEffect(() => {
    return () => joinValueReset();
  }, []);

  const getEmailExplainJSX = useCallback(() => {
    if (!isReSendType.current) {
      return (
        <>
          {inputState.email && !emailRegExp.exec(inputState.email) && (
            <S.ExplainSentence error>
              *이메일 형식이 일치하지 않습니다.
            </S.ExplainSentence>
          )}
          {sendEmailValue.loading && (
            <S.ExplainSentence bold>
              *해당 이메일로 인증코드를 전송중입니다.
            </S.ExplainSentence>
          )}

          {sendEmailValue.success && (
            <S.ExplainSentence bold>
              *해당 이메일로 인증코드를 전송했습니다.
            </S.ExplainSentence>
          )}
          {sendEmailValue.error.response.status ? (
            <S.ExplainSentence error>
              *이메일 전송에 실패하였습니다.
            </S.ExplainSentence>
          ) : null}
        </>
      );
    }
    return null;
  }, [inputState.email, sendEmailValue]);

  const getCodeExplainJSX = useCallback(() => {
    if (focusedState.code) {
      if (verifyCodeValue.error.response.status) {
        return (
          <S.ExplainSentence error>*잘못된 인증코드입니다.</S.ExplainSentence>
        );
      }
      if (isReSendType.current) {
        return (
          <>
            {sendEmailValue.success && (
              <S.ExplainSentence bold>
                *해당 이메일로 인증코드를 재전송했습니다.
              </S.ExplainSentence>
            )}
            {sendEmailValue.error.response.status ? (
              <S.ExplainSentence error>
                *이메일 재전송에 실패하였습니다.
              </S.ExplainSentence>
            ) : (
              ''
            )}
          </>
        );
      }
      return (
        <>
          {verifyCodeValue.success && (
            <S.ExplainSentence bold>*인증이 완료되었습니다.</S.ExplainSentence>
          )}

          {verifyCodeValue.loading && (
            <S.ExplainSentence bold>*인증 중입니다.</S.ExplainSentence>
          )}

          {!verifyCodeValue.success &&
            !verifyCodeValue.loading &&
            !verifyCodeValue.error && (
              <S.ExplainSentence>
                *혹시 메일이 오지 않았다면 입력한 메일주소를 확인해 주세요.
              </S.ExplainSentence>
            )}
        </>
      );
    }
    return null;
  }, [verifyCodeValue, focusedState.code, sendEmailValue]);
  return (
    <S.JoinWrapper>
      <S.JoinContainer>
        <ContentHeader
          padding='100px 0 40px 50px'
          subTitle='대덕소프트웨어마이스터고등학교'
          title='2021 지원자 계정 생성하기'
          underLineLength={370}
        />
        {joinValue.success ? (
          <S.JoinSuccessWrapper>
            <S.SuccessImage />
            <S.SuccessExplainBox>
              <S.SuccessExplainTitle>
                회원가입을 성공적으로 마쳤습니다.
              </S.SuccessExplainTitle>
              <S.SuccessExplainText>
                생성하신 이메일과 비밀번호로 로그인 하실 수 있습니다.
              </S.SuccessExplainText>
            </S.SuccessExplainBox>
          </S.JoinSuccessWrapper>
        ) : (
          <S.MainContentWrapper>
            <S.AgreeInfoWrapper>
              <S.AgreeInfo>{AGREEMENT_1}</S.AgreeInfo>
              <S.AgreeInfoTitle>{AGREEMENT_TITLE1}</S.AgreeInfoTitle>
              <S.AgreeInfo>{AGREEMENT_2}</S.AgreeInfo>
              <S.AgreeInfoTitle>{AGREEMENT_TITLE2}</S.AgreeInfoTitle>
              <S.AgreeInfo>{AGREEMENT_3}</S.AgreeInfo>
            </S.AgreeInfoWrapper>
            <S.JoinAgreeWrapper>
              <S.CheckButton checked={isAgrreed} onClick={agreeJoin} />
              <S.JoinAgreeSentence checked={isAgrreed} onClick={agreeJoin}>
                개인정보 이용약관를 확인했으며, 이에 동의합니다.
              </S.JoinAgreeSentence>
            </S.JoinAgreeWrapper>
            <S.JoinInfoWrapper>
              <S.InfoBox>
                <S.InfoContent>
                  <S.InfoTitle
                    ref={emailPrevRef}
                    isFocused={focusedState.email}
                  >
                    이메일
                  </S.InfoTitle>
                  <JoinInput
                    maxSize
                    isDisabled={disabledState.email}
                    label='email'
                    inputDispatch={inputDispatch}
                    value={inputState}
                    setValue={setInputEmail}
                    isFocused={focusedState}
                  />
                  {isChecked.email && <S.ValidCheckImage />}
                  {!isChecked.email &&
                    focusedState.email &&
                    emailRegExp.exec(inputState.email) && (
                      <S.StyledButton
                        onClick={sendEmailClickHandler}
                        isFocused={focusedState.email}
                      >
                        전송
                      </S.StyledButton>
                    )}
                </S.InfoContent>
                {getEmailExplainJSX()}
              </S.InfoBox>
              <S.InfoBox>
                <S.InfoContent>
                  <S.InfoTitle ref={codePrevRef} isFocused={focusedState.code}>
                    인증코드
                  </S.InfoTitle>
                  <JoinInput
                    label='code'
                    middleSize
                    isDisabled={disabledState.code}
                    inputDispatch={inputDispatch}
                    value={inputState}
                    setValue={setInputCode}
                    isFocused={focusedState}
                  />
                  {(focusedState.code || isChecked.email) && (
                    <>
                      <S.StyledButton
                        isFocused={focusedState.code}
                        onClick={verifyCodeClickHandler}
                      >
                        {verifyCodeValue.loading ? '인증중...' : '인증'}
                      </S.StyledButton>
                      <S.StyledButton
                        isFocused={focusedState.code}
                        onClick={sendEmailClickHandler}
                      >
                        {sendEmailValue.loading ? '재전송중' : '재전송'}
                      </S.StyledButton>
                    </>
                  )}
                  {remainedTime ? <S.Timer>{getFormatedTime}</S.Timer> : ''}
                  {isChecked.code && <S.ValidCheckImage />}
                </S.InfoContent>
                {getCodeExplainJSX()}
              </S.InfoBox>
              <S.InfoBox>
                <S.InfoContent>
                  <S.InfoTitle
                    ref={passwordPrevRef}
                    isFocused={inputFocused.password}
                  >
                    비밀번호
                  </S.InfoTitle>
                  <JoinInput
                    label='password'
                    maxSize
                    isDisabled={disabledState.password}
                    inputDispatch={inputDispatch}
                    value={inputState}
                    setValue={setInputPassword}
                    isFocused={focusedState}
                    inputFocused={inputFocused}
                    setInputFocused={setInputFocused}
                  />
                  {passwordRegExp.exec(inputState.password) && (
                    <S.ValidCheckImage />
                  )}
                </S.InfoContent>
                {(!inputState.password ||
                  passwordRegExp.exec(inputState.password)) && (
                  <S.ExplainSentence>
                    *영문(대소문자 구분), 숫자 포함 8자리 이상 특수기호 가능
                  </S.ExplainSentence>
                )}
                {inputState.password &&
                  !passwordRegExp.exec(inputState.password) && (
                    <S.ExplainSentence error>
                      *조건에 맞지 않은 비밀번호입니다.
                    </S.ExplainSentence>
                  )}
              </S.InfoBox>
              <S.InfoBox>
                <S.InfoContent>
                  <S.InfoTitle
                    ref={passwordCheckPrevRef}
                    isFocused={inputFocused.passwordCheck}
                  >
                    비밀번호 확인
                  </S.InfoTitle>
                  <JoinInput
                    label='passwordCheck'
                    maxSize
                    isDisabled={disabledState.passwordCheck}
                    inputDispatch={inputDispatch}
                    value={inputState}
                    setValue={setInputPasswordCheck}
                    isFocused={focusedState}
                    inputFocused={inputFocused}
                    setInputFocused={setInputFocused}
                  />
                  {passwordRegExp.exec(inputState.passwordCheck) &&
                    inputState.password === inputState.passwordCheck && (
                      <S.ValidCheckImage />
                    )}
                </S.InfoContent>
                {inputState.passwordCheck &&
                  inputState.password !== inputState.passwordCheck && (
                    <S.ExplainSentence error>
                      *비밀번호가 일치하지 않습니다.
                    </S.ExplainSentence>
                  )}
              </S.InfoBox>
            </S.JoinInfoWrapper>
          </S.MainContentWrapper>
        )}
        <S.JoinFooter>
          {joinValue.success ? (
            <S.JoinButton isAvailable={true} onClick={goToMain}>
              <S.ButtonTitle isAvailable={true}>메인으로</S.ButtonTitle>
              <S.JoinImage isAvailable={true} />
            </S.JoinButton>
          ) : (
            <S.JoinButton isAvailable={isAvailable} onClick={joinClickHandler}>
              <S.ButtonTitle isAvailable={isAvailable}>
                {joinValue.loading ? '생성중...' : '생성하기'}
              </S.ButtonTitle>
              <S.JoinImage isAvailable={isAvailable} />
            </S.JoinButton>
          )}
        </S.JoinFooter>
      </S.JoinContainer>
    </S.JoinWrapper>
  );
};

export default Join;
