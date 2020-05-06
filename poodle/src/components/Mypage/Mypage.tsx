import React, { FC } from 'react';
import * as S from '@/styles/Mypage';
import ContentHeader from '@/components/default/common/ContentHeader'
import ProgressBar from './ProgressBar/ProgressBar';

enum MyInfoTitle {
    이름,
    성별,
    최종제출,
    '전형료 납부',
    '우편물 수령',
    특기사항
}

const dummyData = {
    name: '김해건',
    gender: '남',
    finallySubmit: '미완료',
    payMoney: '납부 전',
    recieveEmail: '수령 전',
    specialThing: '검정고시'
}

const Mypage: React.FC<{}> = () => {

    return (
        <S.Wrapper>
            <S.Container>
                <ContentHeader
                    padding='100px 0 70px'
                    subTitle='2021 입학원서 작성'
                    title='마이페이지'
                    underLineLength={153}
                    titleFontSize={36}
                />
                <S.MyInfoWrapper>
                    {
                        Object.entries(dummyData).map((data, index) => (
                            <MyInfoItem 
                                title={MyInfoTitle[index]}
                                infoValue={data[1]}
                                key={index}
                            />
                        ))
                    }
                </S.MyInfoWrapper>
                <S.ExplainSentence>
                    단계를 누르면 해당 페이지로 이동합니다
                </S.ExplainSentence>
                <ProgressBar />
            </S.Container>
        </S.Wrapper>
    );
};

export default Mypage;

const MyInfoItem: React.FC<{ title: string, infoValue: string}> = ({ title, infoValue }) => {

    return (
        <S.MyInfoBox>
            <S.MyInfoContent>
                <S.MyInfoTitle>
                    {title}
                </S.MyInfoTitle>
                <S.MyInfoValue>
                    {infoValue}
                </S.MyInfoValue>
            </S.MyInfoContent>
            {
                title === '최종제출' &&
                <S.DocumentLink to="/mypage/document">
                    제출서류
                </S.DocumentLink>
            }
        </S.MyInfoBox>
    );
};