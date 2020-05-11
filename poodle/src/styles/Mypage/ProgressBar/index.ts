import styled from 'styled-components';
import { finishIcon, notFinishIcon } from '@/assets/Mypage';
import { Link } from 'react-router-dom';

export const ProgressBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
`;

export const ProgressBox = styled.div`
    width: 980px;
    height: 126px;
    display: flex;
`;

export const ProgressItemBox = styled.div`
    width: 91px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProgressImageLink = styled(Link)`
    text-decoration: none;
    width: 80px;
    height: 80px;
    background-size: contain;
    margin-bottom: 24px;
    background-image: url(${notFinishIcon});
    &.finished {
        background-image: url(${finishIcon});
    }
`;

export const ProgressTitleLink = styled(Link)`
    text-decoration: none;
    width: 100px;
    height: 22px;
    font-family: NanumSquareR;
    font-size: 20px;
    line-height: 1.05;
    text-align: center;
    color: #afafaf;
    letter-spacing: -2px;
`;
    
export const Line = styled.hr`
    width: 200px;
    height: 3px;
    border: none;
    background-color: #AFAFAF;
    margin: 40px 10px 0;
    &:last-of-type {
        display: none;
    }
`;