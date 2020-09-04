import React, { FC } from 'react';
import { PaginationDiv, PaginationPage } from '@/styles/ApplicationFormDefault';
import { PAGE_LIST } from './constance/NavigationConstance';

interface Props {
  page: string;
}

const DefaultPagination: FC<Props> = ({ page }) => {
  const isCurrentPage = (page: string, currentPage: string) => {
    if (page === currentPage) {
      return true;
    }
    return false;
  };
  return (
    <PaginationDiv>
      <PaginationPage isCurrentPage={isCurrentPage(page, PAGE_LIST[1])} />
      <PaginationPage isCurrentPage={isCurrentPage(page, PAGE_LIST[2])} />
      <PaginationPage isCurrentPage={isCurrentPage(page, PAGE_LIST[3])} />
      <PaginationPage isCurrentPage={isCurrentPage(page, PAGE_LIST[4])} />
      <PaginationPage isCurrentPage={isCurrentPage(page, PAGE_LIST[5])} />
    </PaginationDiv>
  );
};

export default DefaultPagination;
