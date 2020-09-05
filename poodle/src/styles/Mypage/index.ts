import styled, { css } from 'styled-components';
import { Wrapper, Container } from '@/styles/common';
import {
  JoinInfoWrapper,
  InfoBox,
  InfoContent,
  InfoTitle,
} from '@/styles/Join';
import { Link } from 'react-router-dom';

export { Wrapper };
export { Container };

export const MyInfoWrapper = styled(JoinInfoWrapper)`
  border-top: 1px solid #1f8091;
  border-bottom: 1px solid #1f8091;
`;
export const MyInfoBox = styled(InfoBox)`
  height: 70px;
`;

export const MyInfoContent = styled(InfoContent)`
  padding: 24px 0;
`;

export const MyInfoTitle = styled(InfoTitle)`
  font-size: 20px;
  height: 22px;
`;

export const MyInfoValue = styled(MyInfoTitle)`
  text-align: left;
  color: #000000;
  height: 22px;
  line-height: 1.425;
  margin-left: 79px;
`;

interface SubmitDocumentProps {
  isSubmited: boolean;
}

export const SubmitDocument = styled.button<SubmitDocumentProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: none;
  ${({ isSubmited }) =>
    isSubmited
      ? css`
          background-color: #62d3e8;
          cursor: pointer;
          color: #ffffff;
        `
      : css`
          background-color: #afafaf;
          cursor: not-allowed;
          color: #000000; ;
        `}
  box-sizing: border-box;
  text-align: center;
  font-family: NanumSquareB;
  font-size: 16px;

  outline: none;
`;

export const ExplainSentence = styled.p`
  height: 26px;
  font-family: NanumSquareB;
  font-size: 24px;
  line-height: 0.88;
  text-align: center;
  color: #606060;
  margin: 62px 0;
`;
