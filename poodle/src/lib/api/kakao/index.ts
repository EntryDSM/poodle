import axios from 'axios';
import { kakaoSearchedAddressType } from '../ApiType';

const getSearchedAddressApi = async (searchParams: string) => {
  const TOKEN = process.env.REACT_APP_KAKAO_HEADER_TOKEN;
  const KAKAO_ADDRESS_URL = process.env.REACT_APP_KAKAO_API_URL as string;
  const header = {
    headers: {
      Authorization: TOKEN,
    },
    params: {
      query: searchParams,
    },
  };
  const response = await axios.get(KAKAO_ADDRESS_URL, header);
  const data: kakaoSearchedAddressType[] = response.data.documents;
  return data;
};

export default getSearchedAddressApi;
