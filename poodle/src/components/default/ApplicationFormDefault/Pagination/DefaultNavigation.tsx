import React, { FC } from 'react';
import { DefaultNavigatorDiv } from '../../../../styles/ApplicationFormDefault';
import { DefaultArrowButton } from '../Button';
import DefaultPagination from './DefaultPagination';

interface Props {
    page: string,
}

const DefaultNavigator:FC<Props> = ({ 
    page 
}) => {
    return (
        <DefaultNavigatorDiv>
            <DefaultArrowButton isLeft={true}>이전</DefaultArrowButton>
            <DefaultPagination page={page}/>
            <DefaultArrowButton isLeft={false}>다음</DefaultArrowButton>
        </DefaultNavigatorDiv>
    )
}

export default DefaultNavigator;