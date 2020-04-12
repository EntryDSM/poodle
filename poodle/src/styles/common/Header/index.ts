import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ResponsiveWrapper } from '../index';
import Logo from '@/assets/common/Header/Logo.png';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 3.75rem;
    box-shadow: 0 0.25rem 0.375rem 0 rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
`;

export const HeaderContent = styled(ResponsiveWrapper)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

export const GNBWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.125rem;
    > a:last-child {
        margin-left: 3.75rem;
        @media screen and (max-width: 1269px) {
            margin-left: 0.5rem;
        }
    }
`;

export const LogoWrapper = styled.h1`
    height: 1.8125rem;
`;

export const LinkPointer = styled(Link)`
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: #000000;
`;

export const LogoImage = styled.span`
    background-image: url(${Logo});
    width: 5.8125rem;
    height: 1.8125rem;
    object-fit: contain;
    display: block;
`;

export const GNB = styled.span`
    display: inline-block;
    width: auto;
    height: 18px;
    font-size: 16px;
    line-height: 20px;
`;