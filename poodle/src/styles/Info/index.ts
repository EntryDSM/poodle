import styled from 'styled-components';

export const InfoDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const InfoBody = styled.div`
    width: 1170px;
    margin: 100px;
    > li {
        border: 1px solid #1d7f91;
        border-left: 0;
        border-right: 0;
        list-style: none;
        margin-bottom: 60px;
    }
    > li > div.picture {
        display: flex;
    }
    > li > div.picture > div {
        width: 845px;
        display: flex;
        flex-wrap: wrap;
    }
`

export const InfoElement = styled.div`
    width: 100%;
    min-height: 84px;
    border-bottom: solid 1px #dbdbdb;
    display: flex;
    align-items: center;
    padding: 0px 28px 0px 16px;
    box-sizing: border-box;
`

export const InfoPictureElement = styled(InfoElement)`
    width: 845px;
`

export const InfoElementName = styled.div`
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`

export const InfoElementContent = styled.div`
    width: calc(100% - 180px);
    display: flex;
    align-items: center;
    padding: 0px 30px;
    box-sizing: border-box;
    justify-content: space-between;
    position: relative;
    > div > p {
        font-size: 12px;
        color: #606060;
    }
    > div {
        display: flex;  
        align-items: center;
    }
    > div > label {
        margin-right: 36px;
    }
    > div > span {
        font-size: 18px;
        margin-right: 36px;
        margin-left: 8px;
    }
`

export const InfoPicture = styled.div`
    width: 320px;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    > label {
        width: 300px;
        height: 362px;
        border: 2px solid #acd9e0;
        background-color: #f7feff;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        > input {
            display: none;
        }
        > div {
            > img {
                width: 60px;
                height: 60px;
            }
            > p {
                font-size: 12px;    
                color: #5ba7b5;
                text-align: center;
            }
        }
        > img {
            width: 100%;
            max-height: 100%;
            border-radius: 4px;
        }
    }
`

export const InfoAddressRowContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0px;
    > div {
        display: flex;
        align-items: center;
        margin: 6px 0px;
    }
`

export const QuilificationUserPicture = styled(InfoPicture)`
    width: 255px;
    height: 336px;
    > label {
        width: 235px;
        height: 282px;
    }
`