import React, { FC, useCallback } from 'react';
import {
  SearchModalBox,
  SearchModalHeader,
  SearchModalTitle,
  CloseButton,
  CloseButtonImage,
} from '@/styles/common/Modal';

interface Props {
  title: string;
  children: React.ReactNode;
  onModalChange: () => void;
}
const SearchModalContent: FC<Props> = ({ title, children, onModalChange }) => {
  const preventBubling = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );
  return (
    <SearchModalBox onClick={preventBubling}>
      <SearchModalHeader>
        <SearchModalTitle>{title}</SearchModalTitle>
        <CloseButton onClick={onModalChange}>
          <CloseButtonImage />
        </CloseButton>
      </SearchModalHeader>
      {children}
    </SearchModalBox>
  );
};

export default SearchModalContent;
