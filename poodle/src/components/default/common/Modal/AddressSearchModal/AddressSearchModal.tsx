import React, { FC } from 'react';
import SearchModalBox from '../SearchModalBox';
import {
    ModalWrapper,
    SearchModalInput,
    SearchModalInputDiv,
    SearchModalResult,
} from '@/styles/common/Modal';
import AddressSearchContent from './AddressSearchContent';

const dummyData = [
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },

    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
    {
        schoolName: "구미중학교", 
        address: "경기도 남양주시 진접읍 금곡리 68 금강펜테리움아파트", 
        
    },
]

const SchoolSearchModal: FC = () => {
    return (
        <ModalWrapper>
            <SearchModalBox
                title="우편 번호 검색"
            >
                <SearchModalInputDiv>
                    <SearchModalInput>
                        <input placeholder="주소를 입력해 주세요."/>
                        <img/>
                    </SearchModalInput>
                </SearchModalInputDiv>
                <SearchModalResult>
                    {
                        dummyData.map((data)=> {
                            const { schoolName, address } = data;
                            return <AddressSearchContent 
                                loadNameAddress={schoolName}
                                address={address}
                                postNumber="34111"
                            />
                        })
                    }
                </SearchModalResult>
            </SearchModalBox>
        </ModalWrapper>
    )
}

export default SchoolSearchModal;