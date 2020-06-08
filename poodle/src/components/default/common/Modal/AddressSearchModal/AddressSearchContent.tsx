import React, { FC } from 'react';
import {
    SearchModalContentText,
    SearchModalContent,
    SearchModalCategory,
} from '@/styles/common/Modal';

interface Props {
    loadNameAddress: string,
    address: string,
    postNumber: string,
}

const SchoolSearchContent: FC<Props> = ({
    loadNameAddress,
    address,
    postNumber,
}) => {
    return (
        <SearchModalContent>
            <div>
                <div>
                    <SearchModalCategory>도로명</SearchModalCategory>
                    <SearchModalCategory>주소</SearchModalCategory>
                </div>
                <div>
                    <SearchModalContentText>
                        {loadNameAddress}
                    </SearchModalContentText>
                    <SearchModalContentText>
                        {address}
                    </SearchModalContentText>
                </div>
            </div>
            <p>{postNumber}</p>
        </SearchModalContent>
    )
}

export default SchoolSearchContent;