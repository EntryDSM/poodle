import styled from 'styled-components';
import Logo from '@/assets/Header/Logo.png';
import { Container } from '../index';

export const HeaderWrapper = styled.header`
  z-index: 3;
  position: sticky;
  left: 0px;
  top: 0px;
  width: 100%;
  min-width: 1270px;
  height: 3.75rem;
  box-shadow: 0 0.25rem 0.375rem 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
`;

export const HeaderContent = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GNBWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.125rem;
  > span:last-child {
    margin-left: 3.75rem;
  }
`;

export const LogoWrapper = styled.h1`
  height: 1.8125rem;
`;

export const LogoImage = styled.span`
  background-image: url(${Logo});
  width: 5.8125rem;
  height: 1.8125rem;
  object-fit: contain;
  display: block;
  cursor: pointer;
`;

export const GNB = styled.span`
  display: inline-block;
  width: auto;
  height: 18px;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;
