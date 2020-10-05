import React, { FC } from 'react';
import DaumPostcode, { AddressData } from 'react-daum-postcode';
import { useDispatch } from 'react-redux';
import { setAddress, setPostNum } from '@/core/redux/actions/Info';
import { SearchModalWrapper } from '@/styles/common/Modal';

interface Props {
  modalOff: () => void;
}

const SchoolSearchModal: FC<Props> = ({ modalOff }) => {
  const dispatch = useDispatch();
  const addressChange = (address: string, postNum: string) => {
    const addressAction = setAddress({ address });
    const postNumAction = setPostNum({ postNum });
    dispatch(addressAction);
    dispatch(postNumAction);
    modalOff();
  };
  const onComplete = (data: AddressData) => {
    const { zonecode, roadAddress } = data;
    addressChange(roadAddress, zonecode);
  };
  return (
    <SearchModalWrapper>
      <DaumPostcode
        onComplete={onComplete}
        onSearch={() => {}}
        width='504px'
        height='600px'
      ></DaumPostcode>
    </SearchModalWrapper>
  );
};

export default SchoolSearchModal;
