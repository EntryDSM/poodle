import styled from 'styled-components';

export const PREVIEW_HEADER_COLOR = "#353b3e"

export const PreviewDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

export const PreviewMain = styled.div`
    width: 1170px;
    margin: 100px;
    
`

export const PreviewPdfDiv = styled.div`
    width: 100%;
    height: 982px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    margin-bottom: 40px;
`

export const PreviewPdf = styled.div`
    background-color: #535759;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 932px;
    overflow: scroll;
    padding: 20px;
    > div > div {
        margin: 20px;
    }
`

export const PreviewHeader = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${PREVIEW_HEADER_COLOR};
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
        color: white;
        font-size: 16px;
        width: 200px;
        text-align: center;
        margin: 20px;
    }
`