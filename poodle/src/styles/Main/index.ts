import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Wrapper } from '@/styles/common';
import { RightArrowImage, Background } from '@/assets/Main';

export const MainWrapper = styled(Wrapper)`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const MainContainer = styled(Container)`
    display: flex;
`;

export const ContentBlock = styled.div`
    width: 885px;
    height: 1020px;
    background-color: white;
`;

export const Article = styled.article`

`;

export const StepPeriod = styled.aside`
    height: 40px;
    font-family: NanumSquareR;
    font-size: 30px;
    font-weight: 400;
    line-height: 33px;
    > span {
        font-size: 36px;
        font-weight: 600;
    }
`;

export const DetailedPeriod = styled.pre`
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -1.2px;
    margin-bottom: 212px;
`;

export const EmphasizeLetters = styled.span`
    color: #46b2c6;
`;

export const WhiteSpace = styled.span`
    font-size: 10px;
`;

export const Footer = styled.footer`

`;

export const StepLink = styled(Link)`
    width: 350px;
    height: 80px;
    padding: 28px 20px;
    background-color: #62d3e8;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    box-sizing: border-box;
`;

export const StepTitle = styled.p`
    color: white;
    font-family: NanumSquareB;
    font-size: 20px;
    line-height: 20px;
    height: 22px;
    padding-top: 3px;
    text-decoration: none;
`;

export const RightArrow = styled.img.attrs({
    src: RightArrowImage
})`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

