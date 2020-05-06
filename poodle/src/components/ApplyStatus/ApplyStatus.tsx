import React, { FC } from 'react';
import * as S from '@/styles/ApplyStatus';
import ContentHeader from '@/components/default/common/ContentHeader';

const ApplyStatus: React.FC<{}> = () => {
    return (
        <S.ApplyStatusWrapper>
            <S.Container>
                <ContentHeader
                    padding='160px 0 78px'
                    subTitle='대덕소프트웨어마이스터고등학교'
                    title='2021 신입생 모집'
                    underLineLength={315}
                    titleFontSize={46}
            />
            <S.ContentBlock>
                <S.Title>합격자를 선발 중입니다</S.Title>
                <S.Explain>
                    지금은 합격자를 선발하는 기간입니다.{'\r\n'}
                    합격자 발표를 기다려 주세요.
                </S.Explain>
                <S.ButtonLink to='/'>
                    메인으로 이동
                </S.ButtonLink>
            </S.ContentBlock>
            </S.Container>
        </S.ApplyStatusWrapper>
    );
};

export default ApplyStatus;