import styled from 'styled-components';
import { Wrapper, Container } from '@/styles/common';
import { JoinInfoWrapper, InfoBox, InfoContent, InfoTitle } from '@/styles/Join';
import { Link } from 'react-router-dom';

export { Wrapper as Wrapper };
export { Container as Container };


export const MyInfoWrapper = styled(JoinInfoWrapper)`
    border-top: 1px solid #1F8091;
    border-bottom: 1px solid #1F8091;
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

export const SubmitDocument = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    background-color: #62d3e8
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

export const DocumentLink = styled(Link)`
    box-sizing: border-box;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    background-color: #62d3e8;
    text-align: center;
    line-height: 40px;
    font-family: NanumSquareB;
    font-size: 16px;
    color: #ffffff;
    text-decoration: none;
`;