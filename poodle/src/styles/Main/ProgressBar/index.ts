import styled from 'styled-components';
import {
  AllFinish,
  Finish,
  Progressing,
  XIcon,
} from '@/assets/Main/ProgressBar';

export const ProgressBarWrapper = styled.div`
  width: 285px;
  height: 1020px;
  background-color: #c2f3fa;
`;

export const ProgressBox = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProgressItemWrapper = styled.div<{ isAble: boolean }>`
  display: flex;
  align-items: center;
  height: 60px;
  > a {
    cursor: ${({ isAble }) => (isAble ? 'pointer' : 'not-allowed')};
    text-decoration: none;
  }
  > a:last-child {
    height: 60px;
  }
`;

interface Status {
  isProgressing: boolean;
  isFinish: boolean;
  isAllFinish: boolean;
}

interface Color {
  isBlue: boolean;
}

export const ProgressTitle = styled.span<Color>`
  height: 26px;
  font-family: NanumSquareB;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.6px;
  color: ${({ isBlue }) => (isBlue ? '#46b2c6' : '#7e7e7e')};
  display: inline-block;
  padding-top: 5px;
`;

export const StatusImage = styled.img.attrs<Status>(
  ({ isProgressing, isFinish, isAllFinish }) => ({
    src: isAllFinish
      ? AllFinish
      : isProgressing
      ? Progressing
      : isFinish
      ? Finish
      : XIcon,
  }),
)<Status>`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-left: 16px;
`;

export const VerticalLine = styled.div<Color>`
  width: 3px;
  height: 110px;
  display: flex;
  margin-right: 27px;
  background-color: ${({ isBlue }) => (isBlue ? '#46b2c6' : '#7e7e7e')};
  margin: 15px 27px 15px 0;
`;
