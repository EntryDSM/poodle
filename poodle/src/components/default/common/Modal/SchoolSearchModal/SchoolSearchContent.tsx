import React, { FC, useCallback } from 'react';
import {
  SearchModalContentText,
  SearchModalContent,
  SearchModalCategory,
  SearchModalEmptyCategory,
} from '@/styles/common/Modal';

interface Props {
  schoolName: string;
  address: string;
  schoolCode: string;
  schoolFullName: string;
  onClick: (schoolName: string, code: string) => void;
}

const SchoolSearchContent: FC<Props> = ({
  schoolName,
  address,
  schoolFullName,
  onClick,
  schoolCode,
}) => {
  const clickContentHandler = useCallback(() => {
    onClick(schoolName, schoolCode);
  }, [schoolName, schoolCode]);
  return (
    <SearchModalContent>
      <div onClick={clickContentHandler}>
        <div>
          <SearchModalCategory>학교명</SearchModalCategory>
          <SearchModalEmptyCategory></SearchModalEmptyCategory>
          <SearchModalCategory>주소</SearchModalCategory>
        </div>
        <div>
          <SearchModalContentText className='school'>
            {schoolName}
          </SearchModalContentText>
          <SearchModalContentText>{schoolFullName}</SearchModalContentText>
          <SearchModalContentText>{address}</SearchModalContentText>
        </div>
      </div>
    </SearchModalContent>
  );
};

export default SchoolSearchContent;
