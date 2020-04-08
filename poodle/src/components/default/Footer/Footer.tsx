import React, { FC } from 'react';
import { 
    FooterDiv,
    FooterText,
    FooterTitle, 
    FooterImgButtonDiv,
} from '../../../styles/Footer';
import { 
    facebook, 
    github 
} from '../../../assets/Footer';
import { 
    FooterImgLink, 
    FooterLink 
} from '../Footer';
import { 
    BUSINESS_NUMBER, 
    SCHOOL_ADDRESS, 
    SCHOOL_PHONE_NUMBER, 
    ENTRY_TITLE, 
    TERMS 
} from './FooterConstance';
 
const Footer: FC = () => {
    return (
        <FooterDiv>
            <div>
                <FooterTitle>Entry</FooterTitle>
                <FooterText margin="20">{ENTRY_TITLE}</FooterText>
                <FooterText>{TERMS}</FooterText>
                <FooterText>{SCHOOL_ADDRESS}</FooterText>
                <FooterText>{SCHOOL_PHONE_NUMBER}</FooterText>
                <FooterText>{BUSINESS_NUMBER}</FooterText>
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