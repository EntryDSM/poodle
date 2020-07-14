import React, { useState, useCallback } from 'react';
import ContentHeader from '@/components/default/common/ContentHeader';
import JoinInput from './JoinInput';
import * as S from '@/styles/Join';
import { 
    AGREEMENT_TITLE1,
    AGREEMENT_TITLE2,
    AGREEMENT_1,
    AGREEMENT_2,
    AGREEMENT_3,
} from './JoinConstance';

function Join() {
    const [checked, setChecked] = useState(false);
    const agreeJoin = useCallback(() => setChecked(!checked), [checked]);
    return (
        <S.JoinWrapper>
            <S.JoinContainer>
                <ContentHeader
                    padding='100px 0 40px 50px'
                    subTitle='대덕소프트웨어마이스터고등학교'
                    title='2021 지원자 계정 생성하기'
                    underLineLength={370}
                    border='border-bottom 1px solid #1F8091;'
                />
                <S.AgreeInfoWrapper>
                    <S.AgreeInfo>
                        {AGREEMENT_1}
                    </S.AgreeInfo>
                    <S.AgreeInfoTitle>
                        {AGREEMENT_TITLE1}
                    </S.AgreeInfoTitle>
                    <S.AgreeInfo>
                        {AGREEMENT_2}
                    </S.AgreeInfo>
                    <S.AgreeInfoTitle>
                        {AGREEMENT_TITLE2}
                    </S.AgreeInfoTitle>
                    <S.AgreeInfo>
                        {AGREEMENT_3}
                    </S.AgreeInfo>
                </S.AgreeInfoWrapper>
                <S.JoinAgreeWrapper>
                    <S.CheckButton checked={checked} onClick={agreeJoin} />
                    <S.JoinAgreeSentence checked={checked} onClick={agreeJoin}>
                        개인정보 이용약관를 확인했으며, 이에 동의합니다
                    </S.JoinAgreeSentence>
                </S.JoinAgreeWrapper>
                <S.JoinInfoWrapper>
                    <S.InfoBox>
                        <S.InfoContent>
                            <S.InfoTitle>
                                이메일
                            </S.InfoTitle>
                            <JoinInput maxSize />
                            <S.ValidCheckImage />
                            <S.StyledButton>전송</S.StyledButton>
                        </S.InfoContent>
                        <S.ExplainSentence bold>*해당 이메일로 인증코드를 전송했습니다</S.ExplainSentence>
                    </S.InfoBox>
                    <S.InfoBox>
                        <S.InfoContent>
                            <S.InfoTitle>
                                인증코드
                            </S.InfoTitle>
                            <JoinInput middleSize/>
                            <S.StyledButton>인증</S.StyledButton>
                            <S.StyledButton>재전송</S.StyledButton>
                            <S.Timer>03:00</S.Timer>
                            <S.ValidCheckImage />
                        </S.InfoContent>
                        <S.ExplainSentence>*혹시 메일이 오지 않았다면 입력한 메일주소를 확인해 주세요</S.ExplainSentence>
                    </S.InfoBox>
                    <S.InfoBox>
                        <S.InfoContent>
                            <S.InfoTitle>
                                비밀번호
                            </S.InfoTitle>
                            <JoinInput maxSize />
                            <S.ValidCheckImage />
                        </S.InfoContent>
                        <S.ExplainSentence>*영문(대소문자 구분), 숫자 포함 8자리 이상 특수기호 가능</S.ExplainSentence>
                    </S.InfoBox>
                    <S.InfoBox>
                        <S.InfoContent>
                            <S.InfoTitle>
                                비밀번호 확인
                            </S.InfoTitle>
                            <JoinInput maxSize />
                            <S.ValidCheckImage />
                        </S.InfoContent>
                        <S.ExplainSentence error>*비밀번호가 일치하지 않습니다</S.ExplainSentence>
                    </S.InfoBox>
                </S.JoinInfoWrapper>
                <S.JoinFooter>
                    <S.JoinButton>
                        <S.ButtonTitle>
                            생성하기
                        </S.ButtonTitle>
                        <S.JoinImage />
                    </S.JoinButton>
                </S.JoinFooter>
            </S.JoinContainer>
        </S.JoinWrapper>
    );
}

export default Join;