import React, { FC, useCallback } from 'react';
import {
  SearchModalContentText,
  SearchModalContent,
  SearchModalCategory,
} from '@/styles/common/Modal';

interface Props {
  schoolName: string;
  address: string;
  onClick: (schoolName: string) => void;
}

const SchoolSearchContent: FC<Props> = ({ schoolName, address, onClick }) => {
  const clickContentHandler = useCallback(() => {
    onClick(schoolName);
  }, []);
  return (
    <SearchModalContent>
      <div onClick={clickContentHandler}>
        <div>
          <SearchModalCategory>학교명</SearchModalCategory>
          <SearchModalCategory>주소</SearchModalCategory>
        </div>
        <div>
          <SearchModalContentText className='school'>
            {schoolName}
          </SearchModalContentText>
          <SearchModalContentText>{address}</SearchModalContentText>
        </div>
      </div>
    </SearchModalContent>
  );
};

export default SchoolSearchContent;
