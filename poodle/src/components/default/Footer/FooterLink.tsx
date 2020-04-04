import React, { FC } from 'react';
import { FooterButton } from '../../../styles/Footer';

interface Props {
    link: string,
}

const FooterLink: FC<Props> = ({ link, children }) => {
    const redirectToLink = (link: string) => {
        window.location.href=link;
    }
    const clickHandler = (link: string) => {
        redirectToLink(link);
    }
    return <FooterButton onClick={()=> clickHandler(link)}>{children}</FooterButton>
}

export default FooterLink