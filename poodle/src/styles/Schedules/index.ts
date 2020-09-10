import styled from 'styled-components';
import { Wrapper, Container } from '@/styles/common';
import Background from '@/assets/ApplyStatus/Background.png';
import { Link } from 'react-router-dom';

export const ApplyStatusWrapper = styled(Wrapper)`
  background-image: url(${Background});
`;
export const SchedulesContainer = styled(Container)`
  min-height: 890px;
`;

export const ContentBlock = styled.div`
  padding: 139px 0 88px;
  width: 1170px;
  height: 561px;
  border-radius: 20px;
  background-color: #e0fbff;
  box-sizing: border-box;
  margin-bottom: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  height: 48px;
  font-family: NanumSquareR;
  font-size: 44px;
  font-weight: normal;
  line-height: 44px;
  letter-spacing: -0.88px;
`;

export const Explain = styled.p`
  height: 20px;
  font-family: NanumSquareB;
  font-size: 18px;
  letter-spacing: normal;
  text-align: center;
  color: #46b2c6;
  & + & {
    margin-top: 12px;
  }
`;

export const ButtonLink = styled(Link)`
  width: 300px;
  height: 60px;
  border-radius: 4px;
  text-decoration: none;
  background-color: #62d3e8;
  font-family: NanumSquareB;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 1px;
`;
