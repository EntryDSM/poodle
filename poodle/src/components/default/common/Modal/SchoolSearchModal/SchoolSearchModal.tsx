import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchModalBox from '../SearchModalBox';
import {
  ModalWrapper,
  SearchModalInput,
  SearchModalInputDiv,
  SearchModalResult,
} from '@/styles/common/Modal';
import SchoolSearchContent from './SchoolSearchContent';
import { Dropdown } from '@/components/default/ApplicationFormDefault';
import { setMiddleSchool } from '@/core/redux/actions/Info';
import eduOfficeList from './SchoolSearchConstance';
import { ReducerType } from '@/core/redux/store';
import {
  eduOfficeChange,
  pageChange,
  schoolSearchInputChange,
  SchoolType,
  getSchoolCall,
} from '@/core/redux/actions/SearchSchool';
import { getSearchSchoolUrl } from '@/lib/api/ApplicationApplyApi';

interface Props {
  modalOff: () => void;
}

const SchoolSearchModal: FC<Props> = ({ modalOff }) => {
  const { eduOffice, page, schoolSearchInput, SchoolInfo } = useSelector(
    (state: ReducerType) => state.SearchSchool,
  );
  const dispatch = useDispatch();
  const middleSchoolNameChange = (schoolName: string) => {
    const action = setMiddleSchool({ schoolName });
    dispatch(action);
    modalOff();
  };
  const eduOfficeChangeHandler = useCallback((eduOffice: string) => {
    dispatch(eduOfficeChange({ office: eduOffice }));
  }, []);
  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch(schoolSearchInputChange({ searchInput: value }));
    },
    [],
  );
  const inputKeyPressHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') searchSchool(eduOffice, schoolSearchInput);
    },
    [eduOffice, schoolSearchInput],
  );
  const buttonClickHandler = useCallback(() => {
    searchSchool(eduOffice, schoolSearchInput);
  }, []);
  const dispatchPageChange = useCallback((page: number) => {
    dispatch(pageChange({ page }));
  }, []);
  const dispatchGetSchoolCall = useCallback((url: string) => {
    dispatch(getSchoolCall({ url }));
  }, []);
  const schoolSearchContent = useCallback(
    (schoolInfo: SchoolType[]): React.ReactNode => {
      if (schoolInfo.length <= 0) return <p>결과가 없습니다.</p>;
      return schoolInfo.map(data => {
        const { schoolName, schoolAddress } = data;
        return (
          <SchoolSearchContent
            schoolName={schoolName}
            address={schoolAddress}
            onClick={middleSchoolNameChange}
          />
        );
      });
    },
    [],
  );
  const scrollEventHandler = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      const { scrollHeight, clientHeight, scrollTop } = event.currentTarget;
      if (!isBottom(scrollTop, scrollHeight, clientHeight)) return;
      dispatchPageChange(page + 1);
    },
    [page],
  );
  const isBottom = useCallback(
    (scrollTop: number, scrollHeight: number, clientHeight: number) => {
      return scrollTop + clientHeight === scrollHeight;
    },
    [],
  );
  const searchSchool = useCallback(
    (eduOffice: string, schoolSearchInput: string) => {
      const url = getSearchSchoolUrl(eduOffice, schoolSearchInput, 0, 10);
      dispatchPageChange(0);
      dispatchGetSchoolCall(url);
    },
    [eduOffice, schoolSearchInput],
  );
  return (
    <ModalWrapper>
      <SearchModalBox title='학교 검색' onModalChange={modalOff}>
        <SearchModalInputDiv>
          <Dropdown
            options={eduOfficeList}
            onChange={eduOfficeChangeHandler}
            value={eduOffice}
            width='170px'
          />
          <SearchModalInput width='250px' leftMargin='16px'>
            <input
              placeholder='주소를 입력해 주세요.'
              onChange={inputChangeHandler}
              onKeyPress={inputKeyPressHandler}
            />
            <img onClick={buttonClickHandler} />
          </SearchModalInput>
        </SearchModalInputDiv>
        <SearchModalResult onScroll={scrollEventHandler}>
          {schoolSearchContent(SchoolInfo)}
        </SearchModalResult>
      </SearchModalBox>
    </ModalWrapper>
  );
};

export default SchoolSearchModal;
