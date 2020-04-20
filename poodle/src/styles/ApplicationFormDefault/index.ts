import styled from 'styled-components';

export const DefaultArrowButtonDiv = styled.div`
    width: 150px;
    height: 50px;
    border-radius: 8px;
    border: solid 2px #62d3e8;
    background-color: #ffffff;
    color: #62d3e8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
`

export const ButtonDiv = styled.div`
    height: 40px;
    padding: 12px 26px;
    border-radius: 8px;
    border: solid 1px #acd9e0;
    background-color: #f7feff;
    color: #1d7f91;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    box-sizing: border-box;
`

export const RightArrow = styled.div`
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 5px solid #62d3e8;
    border-top: 5px solid #62d3e8;
    transform: rotate(45deg);
    margin-left: 30px;
`

export const LeftArrow = styled.div`
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 5px solid #62d3e8;
    border-top: 5px solid #62d3e8;
    transform: rotate(-135deg);
    margin-right: 30px;
`

export const DefaultNavigatorDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const CheckboxDiv = styled.label`
    display: flex;
    align-items: center;
    > div {
        width: 18px;
        height: 18px;
        border-radius: 3px;
        border: solid 1px #46b2c6;
        background-color: #ffffff;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }
    > div:after {
        content: "";
        display: none;
        width: 5px;
        height: 9px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg) translate(-1px,-1px);
        transition: 0.3s;
    }
    > input {
        display: none;
    }
    > input[type="checkbox"]:checked ~ div {
        background-color: #46b2c6;
    }
    > input[type="checkbox"]:checked ~ div:after {
        display: block;
    }
    > p {
        font-size: 18px;
    }
`

export const TitleDiv = styled.div<{ margin?: string }>` 
    display: flex;
    flex-wrap: wrap;
    > p {
        font-size: 20px;
        margin: 8px 0px;
        width: 100%;
    }
    > h1 {
        font-size: 36px;
        padding-bottom: 12px;
        border-bottom: 3px solid #62d3e8;
        margin-bottom: ${props => props.margin ? props.margin : ""};
    }
`

export const PaginationDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PaginationPage = styled.div<{ isCurrentPage?: boolean }>`
    width: ${props => props.isCurrentPage ? "26px" : "20px"};
    height: ${props => props.isCurrentPage ? "26px" : "20px"};
    background-color: ${props => props.isCurrentPage ? "#62d3e8" : "#c9f7ff"};
    border-radius: 13px;
    margin: 20px;
`

export const RadioDiv = styled.label`
    display: flex;
    align-items: center;
    > input {
        display: none;
    }
    > div {
        width: 20px;
        height: 20px;
        border: solid 1px #46b2c6;
        border-radius: 10px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        &::after {
            width: 12px;
            height: 12px;
            display: none;
            background-color: #46b2c6;
            content: "";
            border-radius: 6px;
        }
    }
    font-size: 18px;
    > input[type="radio"]:checked ~ div::after {
        display: block;
    }
`

export const DropdownDiv = styled.div<{ width: string, isAble?: boolean }>`
    width: ${props => props.width};
    min-height: 40px;
    position: relative;
    > label {
        width: 100%;
        border-radius: 4px;
        border: solid 1px ${props => props.isAble ? "#606060" : "#46b2c6"};
        position: absolute;
        z-index: 2;
        > input {
            display: none;
        }
        > input[type="checkbox"]:checked ~ div > div {
            display: flex;
        }
        > div.DropdownWrapper {
            max-height: 300px;
            overflow: scroll;
        }
    }
`

export const DropdownElement = styled.div`
    font-size: 16px;
    font-weight: 100;
    width: 100%;
    height: 30px;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    display: none;
    border-radius: 4px;
    background-color: white;
    &:hover {
        background-color: #d9f1f5;
    }
    z-index: 2;
`

export const DropdownCurrentElement = styled(DropdownElement)<{ isAble?: boolean }>`
    font-size: 18px;
    font-weight: 500;
    height: 40px;
    display: flex;
    justify-content: space-between;
    &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid ${props => props.isAble ? "#606060" : "#46b2c6"};
    }
`

export const DefaultInput = styled.input<{ width: string, isEmpty: boolean, isCenter?: boolean }>`
    width: ${props => props.width};
    height: 40px;
    border: 1px solid ${props => props.isEmpty ? "#ff6969" : "#afafaf"};
    background-color: "#fcfcfc";
    border-radius: 4px;
    font-size: 18px;
    padding: 16px;
    margin-right: 16px;
    box-sizing: border-box;
    text-align: ${props => props.isCenter ? "center" : "left"};
    &:valid {   
        border: 1px solid #acd9e0;
        background-color: #f7feff;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`