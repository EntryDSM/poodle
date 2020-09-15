import styled from 'styled-components';
import { Wrapper, Container } from '@/styles/common';

export { Wrapper };

export const DocumentContainer = styled(Container)`
  padding-bottom: 96px;
  min-height: 1297px;
`;

export const DocumentWrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DownloadButton = styled.button`
  width: 146px;
  height: 40px;
  border-radius: 8px;
  color: #ffffff;
  background-color: #62d3e8;
  outline: none;
  border: none;
  margin-top: 18px;
  cursor: pointer;
`;
