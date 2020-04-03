import React, { useState, useCallback } from 'react';
import JoinInput from './JoinInput';
import * as S from '../../styles/Join';

function Join() {
    const [checked, setChecked] = useState(false);
    const agreeJoin = useCallback(() => setChecked(!checked), [checked]);
    return (
        <>
        <S.JoinWrapper>
            <S.JoinContainer>
                <S.JoinHeader>
                    <S.SubTitle>
                        대덕소프트웨어마이스터고등학교
                    </S.SubTitle>
                    <S.Title>
                        2021 지원자 계정 생성하기
                    </S.Title>
                    <S.Horizon />
                </S.JoinHeader>
                <S.AgreeInfoWrapper>
                    <S.AgreeInfo>
                        본 입학원서에 기재된 지원자의 개인정보는 신입생 입학관리업무의 원활한 수행을 위하여 개인정보의  수집‧유출‧오용‧남용으로부터 사생활의 비밀 등을 보호하도록 한{`\r\n`}
                        개인정보보호법 규정에 따라 다음과 같이 수집‧이용‧제공됩니다.
                    </S.AgreeInfo>
                    <S.AgreeInfoTitle>1. (개인정보 처리의 법령상 근거)</S.AgreeInfoTitle>
                    <S.AgreeInfo>
                        &nbsp;본 입학원서에 기재된 개인정보의 처리업무는 초‧중등교육법 제47조 및 동법 시행령 제81조, 제82조, 제84조, 제98조 및 본교의 입학전형 실시계획 등에 근거하고 
                        있습니다.
                    </S.AgreeInfo>
                    <S.AgreeInfoTitle>2. (정보주체의 권리)</S.AgreeInfoTitle>
                    <S.AgreeInfo>
                        &nbsp;지원자는 자신이 제공한 개인정보에 대하여 개인정보 보호법 제4조 및 제35조부터 제38조까지에 따라 열람‧처리‧정지‧정정‧삭제‧파기 등을 요구할 수 있으며, 개인정보{`\r\n`}
                        보호법을 위반한 행위로 인한 손해 발생시에는 개인정보 보호법 제39조에 따라 손해배상을 청구할 수 있습니다
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
        <S.Footer />
        </>
    );
}

export default Join;