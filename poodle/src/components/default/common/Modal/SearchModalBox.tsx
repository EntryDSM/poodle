import React, { FC } from 'react';
import { 
    SearchModalBox,
    SearchModalHeader,
    SearchModalTitle,
    CloseButton,
    CloseButtonImage,
} from '@/styles/common/Modal';

interface Props {
    title: string,
    children: React.ReactNode,
}

const SearchModalContent: FC<Props> = ({
    title,
    children,
}) => {
    return (
        <SearchModalBox>
            <SearchModalHeader>
                <SearchModalTitle>{title}</SearchModalTitle>
                <CloseButton>
                    <CloseButtonImage/>
                </CloseButton>
            </SearchModalHeader>
            {children}
        </SearchModalBox>
    )
}

export default SearchModalContent;