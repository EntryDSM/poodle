import React from 'react';
import { 
    FooterDiv,
    FooterText,
    FooterTitle, 
    FooterImgButtonDiv,
} from '../../../styles/Footer';
import { facebook, github } from '../../../assets/Footer';
import { FooterImgLink, FooterLink } from '../Footer';
 
const Footer = () => {
    return (
        <FooterDiv>
            <div>
                <FooterTitle>Entry</FooterTitle>
                <FooterText margin="20">ⓒ 2019 Entry</FooterText>
                <FooterText>개인정보 처리방침 ㅣ 이용약관</FooterText>
                <FooterText>(34111) 대전광역시 유성구 가정북로 76(장동 23-9)</FooterText>
                <FooterText>교무실 : 042-866-8822 / Fax : 042-867-9900     행정실 : 042-866-8885 / Fax : 042-863-4308</FooterText>
                <FooterText>사업자 등록 번호 314-83-01600</FooterText>
            </div>
            <div>
                <FooterLink link="">Entry 소개</FooterLink>
                <FooterLink link="">시스템 소개</FooterLink>
                <FooterLink link="">개발자 소개</FooterLink>
                <FooterImgButtonDiv>
                    <FooterImgLink link="" img={github} alt="github로"/>
                    <FooterImgLink link="" img={facebook} alt="facebook으로"/>
                </FooterImgButtonDiv>
            </div>
        </FooterDiv>
    )
}

export default Footer;