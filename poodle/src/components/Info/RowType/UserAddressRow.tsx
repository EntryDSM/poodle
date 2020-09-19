import React, { FC, useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modalOn, ADDRESS_SEARCH_MODAL } from '@/core/redux/actions/Modal';
import { DefaultRow } from '..';
import { Input, DefaultButton } from '../../default/ApplicationFormDefault';
import {
  InfoElementContent,
  InfoAddressRowContent,
} from '../../../styles/Info';

interface Props {
  valueChangeHandler: (value: string) => void;
  address: string;
  isError: boolean;
  detailAddress: string;
  postNum: string;
  describe: string;
}

const UserAddressRow: FC<Props> = ({
  valueChangeHandler,
  address,
  isError,
  detailAddress,
  postNum,
  describe,
}) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  const [isDetailAddressEmpty, detailAddressEmptyChange] = useState<boolean>(
    false,
  );
  const dispatch = useDispatch();
  const isEmptyCheck = useCallback((text: string) => {
    return text.length > 0;
  }, []);
  useEffect(() => {
    if (isError && !isEmptyCheck(address)) {
      emptyChange(true);
      return;
    }
    if (isError && !isEmptyCheck(detailAddress)) {
      detailAddressEmptyChange(true);
      return;
    }
    emptyChange(false);
    detailAddressEmptyChange(false);
  }, [isError, address, detailAddress]);
  const addressSearchModalOn = useCallback(() => {
    dispatch(modalOn(ADDRESS_SEARCH_MODAL));
  }, [dispatch]);
  return (
    <DefaultRow title='주소'>
      <InfoElementContent>
        <InfoAddressRowContent>
          <div>
            <Input
              width='160px'
              valueChangeHandler={() => {}}
              isEmpty={isEmpty}
              value={postNum}
              disable
            />

            <Input
              width='301px'
              valueChangeHandler={() => {}}
              isEmpty={isEmpty}
              value={address}
              disable
            />
            <DefaultButton onClick={addressSearchModalOn}>검색</DefaultButton>
          </div>
          <div>
            <Input
              width='580px'
              valueChangeHandler={valueChangeHandler}
              isEmpty={isDetailAddressEmpty}
              value={detailAddress}
            />
          </div>
        </InfoAddressRowContent>
        <div>
          <p>{describe}</p>
        </div>
      </InfoElementContent>
    </DefaultRow>
  );
};

export default UserAddressRow;
