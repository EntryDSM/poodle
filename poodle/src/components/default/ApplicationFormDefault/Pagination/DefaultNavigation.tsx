import React, { FC } from 'react';
import { DefaultNavigatorDiv } from '@/styles/ApplicationFormDefault';
import { DefaultArrowButton } from '../Button';
import DefaultPagination from './DefaultPagination';

interface Props {
  page: string;
  currentPageClickHandler: Function;
  nextPageClickHandler: Function;
}

const DefaultNavigator: FC<Props> = ({
  page,
  currentPageClickHandler,
  nextPageClickHandler,
}) => {
  const currentButtonClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    currentPageClickHandler();
  };
  const nextButtonClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    nextPageClickHandler();
  };
  return (
    <DefaultNavigatorDiv>
      <DefaultArrowButton isLeft onClick={currentButtonClickHandler}>
        이전
      </DefaultArrowButton>
      <DefaultPagination page={page} />
      <DefaultArrowButton isLeft={false} onClick={nextButtonClickHandler}>
        다음
      </DefaultArrowButton>
    </DefaultNavigatorDiv>
  );
};

export default DefaultNavigator;
