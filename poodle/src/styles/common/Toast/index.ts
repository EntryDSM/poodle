import styled, { css, keyframes } from 'styled-components';
import { Check } from '@/assets/common';

export const ToastAnimation = keyframes`
    from{
        opacity: 0;
    }
    5% {
        opacity: 1;
    }
    95% {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

export const ToastDiv = styled.div<{ isAble: boolean }>`
  width: 300px;
  height: 50px;
  display: ${props => (props.isAble ? 'flex' : 'none')};
  animation: ${ToastAnimation} 3s linear 1;
  animation-fill-mode: forwards;
  position: relative;
  margin: 10px;
`;

export const FailureToastImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff6969;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 40px;
    height: 40px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 40px;
      height: 4px;
      background-color: white;
      border-radius: 2px;
      top: 22px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export const SuccessToastImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: #3ede18;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 40px;
    height: 40px;
    background-image: url(${Check});
  }
`;

export const ToastBody = styled.div<{ isSuccess: boolean }>`
  background-color: ${props => (props.isSuccess ? '#b1f2a2' : '#ffc4c4')};
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  > p {
    font-size: 14px;
    margin: 6px;
  }
  > span {
    font-size: 10px;
    color: #606060;
    margin: 6px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
