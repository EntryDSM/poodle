import React, { FC, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  ModalWrapper,
  SearchModalInput,
  SearchModalInputDiv,
  SearchModalResult,
} from '@/styles/common/Modal';
import SearchModalBox from '../SearchModalBox';
import { setAddress, setPostNum } from '../../../../../core/redux/actions/Info';
import AddressSearchContent from './AddressSearchContent';
import getSearchedAddressApi from '@/lib/api/kakao';
import { kakaoSearchedAddressType } from '@/lib/api/ApiType';

interface Props {
  modalOff: () => void;
}

const dummyData = [
  {
    schoolName: '구미중학교',
    address: '경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트',
  },
];

const SchoolSearchModal: FC<Props> = ({ modalOff }) => {
  const dispatch = useDispatch();
  const [searchedAddresses, searchedAddressChange] = useState<
    kakaoSearchedAddressType[]
  >([]);
  const [params, paramsChange] = useState('');
  const addressChange = (address: string, postNum: string) => {
    const addressAction = setAddress({ address });
    const postNumAction = setPostNum({ postNum });
    dispatch(addressAction);
    dispatch(postNumAction);
    modalOff();
  };
  const getSearchedAddress = useCallback(async (params: string) => {
    const response = await getSearchedAddressApi(params);
    return response;
  }, []);
  const paramInputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      paramsChange(event.target.value);
    },
    [],
  );
  const searchAddress = useCallback(async () => {
    const response = await getSearchedAddress(params);
    searchedAddressChange(response);
  }, [params]);
  const isHaveAddress = useCallback((response: kakaoSearchedAddressType) => {
    if (!response.road_address) {
      return false;
    }
    return true;
  }, []);
  const responseToAddress = useCallback(
    (response: kakaoSearchedAddressType) => {
      const {
        road_address: {
          region_1depth_name,
          region_2depth_name,
          region_3depth_name,
          building_name,
        },
      } = response;
      const address = `${region_1depth_name} ${region_2depth_name} ${region_3depth_name} ${building_name}`;
      return address;
    },
    [],
  );
  const setAddressComponent = useCallback(
    (addresses: kakaoSearchedAddressType[]) => {
      const buf: React.ReactChild[] = [];
      addresses.map(data => {
        if (!isHaveAddress(data)) return;
        buf.push(
          <AddressSearchContent
            loadNameAddress={data.road_address.address_name}
            address={responseToAddress(data)}
            postNumber={data.road_address.zone_no}
            onClick={addressChange}
          />,
        );
      });
      return buf;
    },
    [],
  );
  const isListEmpty = useCallback((list: Array<any>) => {
    if (list.length <= 0) return true;
    return false;
  }, []);
  const checkAddressCompisEmptyAndSetErr = useCallback(
    (addresses: kakaoSearchedAddressType[]) => {
      const addressComponents = setAddressComponent(addresses);
      if (isListEmpty(addressComponents)) {
        return '검색된 결과가 없습니다.';
      }
      return addressComponents;
    },
    [],
  );
  return (
    <SearchModalBox title='우편 번호 검색' onModalChange={modalOff}>
      <SearchModalInputDiv>
        <SearchModalInput>
          <input
            placeholder='주소를 입력해 주세요.'
            value={params}
            onChange={paramInputChangeHandler}
          />
          <img onClick={searchAddress} />
        </SearchModalInput>
      </SearchModalInputDiv>
      <SearchModalResult>
        {checkAddressCompisEmptyAndSetErr(searchedAddresses)}
      </SearchModalResult>
    </SearchModalBox>
  );
};

export default SchoolSearchModal;
