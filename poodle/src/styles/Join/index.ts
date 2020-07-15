import styled, { css, keyframes } from 'styled-components';
import { Container, Wrapper } from '../common';
import {
  check,
  checkedImage,
  rightArrow,
  validRightArrow,
  inputCheck,
} from '@/assets/Join';
import { BlueSuccess } from '@/assets/Modal';

export const JoinWrapper = styled(Wrapper)`
  box-sizing: border-box;
`;

export const JoinContainer = styled(Container)`
  padding: 0;
`;

export const MainContentWrapper = styled.div`
  border-top: 1px solid #1f8091;
  border-bottom: 1px solid #1f8091;
`;

export const AgreeInfoWrapper = styled.div`
  border-top: 1rem solid #effbfd;
  border-bottom: 1rem solid #effbfd;
  padding: 1.875rem 4.9375rem;
  font-size: 1rem;
`;

export const AgreeInfo = styled.p`
  color: #272343;
  line-height: 1.3125rem;
  letter-spacing: 0.29px;
  font-size: 16px;
  font-family: NanumSquare;
  letter-spacing: 0.29px;
  color: #272343;
`;

export const AgreeInfoTitle = styled.span`
  display: inline-block;
  margin-top: 1rem;
  color: #46b2c6;
  font-family: NanumSquare;
  font-size: 17px;
  letter-spacing: 0.31px;
`;

export const JoinAgreeWrapper = styled.div`
  border-top: 1px solid #1f8091;
  border-bottom: 1px solid #1f8091;
  padding: 1.875rem 3.125rem 1.875rem 0;
  display: flex;
  justify-content: flex-end;
`;

export const JoinSuccessWrapper = styled.main`
  display: flex;
  padding: 90px 50px 205px 50px;
`;

export const SuccessImage = styled.img.attrs({
  src: BlueSuccess,
})`
  width: 159px;
  height: 159px;
  object-fit: contain;
  margin-right: 100px;
`;

export const SuccessExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SuccessExplainTitle = styled.h1`
  font-family: NanumSquareR;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 10px;
  letter-spacing: -1.2px;
`;

export const SuccessExplainText = styled.p`
  font-family: NanumSquareR;
  font-size: 30px;
  letter-spacing: -1.2px;
`;

type CheckButtonProps = {
  checked: boolean;
};

export const CheckButton = styled.button<CheckButtonProps>`
  background: none;
  background-image: url(${({ checked }) => (checked ? checkedImage : check)});
  border: none;
  outline: none;
  background-size: contain;
  background-repeat: no-repeat;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;

export const JoinAgreeSentence = styled.p<CheckButtonProps>`
  height: 1.125rem;
  font-family: NanumSquare;
  font-size: 1rem;
  color: #${props => (props.checked ? '000000' : '606060')};
  line-height: 1.438rem;
  cursor: pointer;
`;

export const JoinInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 3.125rem;
  &:not(:last-child) {
    border-bottom: 1px solid #dbdbdb;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTitle = styled.p<{
  isFocused?: boolean;
}>`
  font-family: NanumSquare;
  width: 15.6875rem;
  height: 1.125rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.425;
  color: #${({ isFocused }) => (isFocused ? '000000' : '606060')};
`;

type StyledJoinInputProps = {
  maxSize?: boolean;
  middleSize?: boolean;
  isFocused: boolean;
};

export const StyledJoinInput = styled.input<StyledJoinInputProps>`
  width: ${({ maxSize, middleSize }) =>
    (maxSize && '25') || (middleSize && '12.5')}rem;
  margin-right: ${props => props.middleSize && '0.75rem'};
  height: 2.5rem;
  border-radius: 0.25rem;
  outline: none;
  padding: 0.6875rem 1.125rem;
  box-sizing: border-box;
  font-size: 1rem;
  ${({ isFocused }) =>
    isFocused
      ? css`
          color: #000000;
          border: solid 1px #acd9e0;
          background-color: #f7feff;
        `
      : css`
          border: solid 1px #afafaf;
          background-color: #fcfcfc;
          color: #606060;
        `}
  :focus {
    color: #000000;
    border: solid 1px #acd9e0;
    background-color: #f7feff;
  }
`;

const scale = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

type StyledButtonProps = {
  isFocused: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  width: 4.875rem;
  height: 2.5rem;
  padding: 0.75rem 0;
  border-radius: 0.25rem;
  animation: ${scale} 1s 1 linear alternate;
  ${({ isFocused }) =>
    isFocused
      ? css`
          border: solid 1px #acd9e0;
          background-color: #f7feff;
          color: #1d7f91;
        `
      : css`
          border: solid 1px #afafaf;
          background-color: #fcfcfc;
          color: #606060;
        `}

  font-family: NanumSquare;
  font-size: 0.875rem;
  line-height: 1.2;
  margin-left: 1rem;
  outline: none;
  cursor: pointer;
`;

export const ValidCheckImage = styled.img.attrs({
  src: inputCheck,
})`
  width: 20px;
  height: 15px;
  object-fit: contain;
  margin-left: 1.125rem;
  animation: ${scale} 1s 1 linear alternate;
`;

type ExplainSentenceProps = {
  bold?: boolean;
  error?: boolean;
};

export const ExplainSentence = styled.p<ExplainSentenceProps>`
  height: 0.8125rem;
  font-family: NanumSquare;
  font-size: 0.75rem;
  line-height: 1.08;
  color: #606060;
  color: ${({ bold, error }) => (bold && '#000000') || (error && '#ff5c5c')};
  animation: ${scale} 1s 1 linear alternate;
`;

export const Timer = styled.span`
  width: 3.125rem;
  height: 1.25rem;
  font-family: NanumSquare;
  font-size: 1.125rem;
  line-height: 1.2;
  text-align: left;
  color: #46b2c6;
  margin-left: 1.875rem;
`;

export const JoinFooter = styled.footer`
  padding: 2.5rem 3.125rem 2.5rem 0;
  display: flex;
  justify-content: flex-end;
`;

export const JoinButton = styled.button<{ isAvailable: boolean }>`
  width: 9.375rem;
  height: 3.125rem;
  padding: 0 1.125rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  outline: none;
  ${({ isAvailable }) =>
    isAvailable
      ? css`
          border: solid 2px #62d3e8;
          background-color: #f7feff;
        `
      : css`
          border: solid 2px #afafaf;
          background-color: #fcfcfc;
        `}
`;

export const ButtonTitle = styled.span<{ isAvailable: boolean }>`
  font-family: NanumSquare;
  font-size: 18px;
  line-height: 1.17;
  color: ${({ isAvailable }) => (isAvailable ? '#62d3e8' : '#afafaf')};
`;

export const JoinImage = styled.img.attrs(
  ({ isAvailable }: { isAvailable: boolean }) => ({
    src: isAvailable ? validRightArrow : rightArrow,
  }),
)<{
  isAvailable: boolean;
}>`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;
