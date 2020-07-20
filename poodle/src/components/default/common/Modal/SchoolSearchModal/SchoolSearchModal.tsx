import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
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

interface OptionType {
  VALUE: string;
  LABEL: string;
}

interface Props {
  modalOff: () => void;
}

const dummyData = [
  {
    schoolName: '구미중학교',
    address: '경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트',
  },
];

const dummyOption: OptionType[] = [
  { LABEL: 'sth', VALUE: 'sth' },
  { LABEL: 'sth4', VALUE: 'sth1' },
  { LABEL: 'sth3', VALUE: 'sth2' },
  { LABEL: 'sth2', VALUE: 'sth3' },
  { LABEL: 'sth1', VALUE: 'sth4' },
];

const SchoolSearchModal: FC<Props> = ({ modalOff }) => {
  const dispatch = useDispatch();
  const middleSchoolNameChange = (schoolName: string) => {
    const action = setMiddleSchool({ schoolName });
    dispatch(action);
    modalOff();
  };
  return (
    <ModalWrapper>
      <SearchModalBox title='학교 검색' onModalChange={modalOff}>
        <SearchModalInputDiv>
          <Dropdown
            options={dummyOption}
            onChange={() => {}}
            value=''
            width='170px'
          />
          <SearchModalInput width='250px' leftMargin='16px'>
            <input placeholder='주소를 입력해 주세요.' />
            <img onClick={modalOff} />
          </SearchModalInput>
        </SearchModalInputDiv>
        <SearchModalResult>
          {dummyData.map(data => {
            const { schoolName, address } = data;
            return (
              <SchoolSearchContent
                schoolName={schoolName}
                address={address}
                onClick={middleSchoolNameChange}
              />
            );
          })}
        </SearchModalResult>
      </SearchModalBox>
    </ModalWrapper>
  );
};

export default SchoolSearchModal;
