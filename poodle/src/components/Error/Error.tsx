import React, { FC } from 'react';
import * as S from '@/styles/ApplyStatus';
import ContentHeader from '@/components/default/common/ContentHeader';
import { ERROR_INFO } from '@/components/ApplyStatus/ApplyStatusConstance';

const Error: React.FC<{}> = () => {
    return (
        <S.ApplyStatusWrapper>
            <S.Container>
                <ContentHeader
                    padding='180px 0 92px'
                    title='404 NOT FOUND'
                    underLineLength={310}
                    titleFontSize={46}
            />
            <S.ContentBlock>
                <S.Title>{ERROR_INFO.title}</S.Title>
                <S.Explain>
                    {ERROR_INFO.explain}
                </S.Explain>
                <S.ButtonLink to='/'>
                    메인으로 이동
                </S.ButtonLink>
            </S.ContentBlock>
            </S.Container>
        </S.ApplyStatusWrapper>
    );
};

export default Error;