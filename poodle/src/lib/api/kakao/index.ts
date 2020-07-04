import axios from 'axios';
import { KAKAO_ADDRESS_URL } from '../ServerUrl';
import { kakaoSearchedAddressType } from '../ApiType';
const getSearchedAddressApi = async (searchParams: string) => {
    const header = {
        headers: {
            Authorization: `KakaoAK 2c8f36e27e83eb36b73d5d4aea7a7068`,
        },
        params: {
            query: searchParams,
        }
    }
    const response = await axios.get(KAKAO_ADDRESS_URL, header);
    console.log(response)
    const data:kakaoSearchedAddressType[] = response.data.documents;
    return data;
}

export default getSearchedAddressApi;