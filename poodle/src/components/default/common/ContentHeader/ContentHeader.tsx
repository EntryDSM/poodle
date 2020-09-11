import React, { FC } from 'react';
import * as S from '@/styles/common/ContentHeader';

type ContentHeaderProps = {
  padding: string;
  subTitle?: string;
  title: string;
  underLineLength: number;
  border?: string;
  titleFontSize?: number;
};

const ContentHeader: React.FC<ContentHeaderProps> = ({
  padding,
  subTitle,
  title,
  underLineLength,
  border,
  titleFontSize,
}) => (
  <S.ContentHeaderWrapper padding={padding} border={border}>
    <S.SubTitle>{subTitle}</S.SubTitle>
    <S.Title fontSize={titleFontSize}>{title}</S.Title>
    <S.UnderLine length={underLineLength} />
  </S.ContentHeaderWrapper>
);

export default ContentHeader;
