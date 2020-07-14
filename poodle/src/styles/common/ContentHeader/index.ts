import styled from 'styled-components';

type ContentHeaderProps = {
  padding: string;
  border?: string;
};

export const ContentHeaderWrapper = styled.header<ContentHeaderProps>`
  padding: ${({ padding }) => padding};
  ${({ border }) => border};
`;

export const SubTitle = styled.p`
  font-family: NanumSquareL;
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;
  height: 22px;
  margin-bottom: 8px;
`;

export const Title = styled.h1<{ fontSize?: number }>`
  font-family: NanumSquare;
  font-size: ${({ fontSize }) => fontSize || 36}px;
  line-height: ${({ fontSize }) => fontSize || 36}px;
  font-weight: 400;
  letter-spacing: -2.3px;
  margin-bottom: 12px;
`;

export const UnderLine = styled.hr<{ length: number }>`
  width: ${({ length }) => length}px;
  height: 3px;
  border: none;
  background-color: #62d3e8;
  margin: 0;
`;
