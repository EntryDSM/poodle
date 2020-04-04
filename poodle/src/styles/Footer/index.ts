import styled from 'styled-components';

const FooterColor = "#62d3e8";
const FooterFontColor = "white";

export const FooterDiv = styled.div`
    width: 100%;
    height: 204px;
    background-color: ${FooterColor};
    color: ${FooterFontColor};
    padding: 20px 375px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    > div {
        box-sizing: content-box;
    }
`

export const FooterTitle = styled.p`
    font-size: 33px;
    margin-bottom: 8px; 
    font-weight: 600;
`

export const FooterText = styled.div<{ margin?: string }>`
    font-size: 10px;
    margin-bottom: ${props => (props.margin ? `${props.margin}px` : "10px")};
`

export const FooterButton = styled.p`
    font-size: 16px;
    margin: 16px;
    cursor: pointer;
`

export const FooterImgButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const FooterImgButton = styled.div`
    width: 20px;
    height: 20px;
    padding: 8px;
    cursor: pointer;
`