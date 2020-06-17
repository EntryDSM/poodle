import styled, { css, keyframes } from 'styled-components';

export const PopupDiv = styled.div<{ isError: boolean }>`
    width: 300px;
    height: 50px;
    right: 20px;
    top: 80px;
    position: absolute;
    display: ${(props) => (props.isError ? 'flex' : 'none')};
    animation: ${() => css`${PopupAnimation} 5s linear 1`};
    animation-fill-mode:forwards;
    position: fixed;
`;

export const PopupImg = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ff6969;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        width: 40px;
        height: 40px;
        &:before,&:after{
            content:'';
            position:absolute;
            width:40px;
            height:4px;
            background-color:white;
            border-radius:2px;
            top:22px;
        }
        &:before{
        transform:rotate(45deg);
    }
        &:after{
            transform:rotate(-45deg);
        }
    }
`;

export const PopupAnimation = keyframes`
    from{
        opacity: 0;
    }
    5% {
        opacity: 1;
    }
    95% {
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;
export const PopupBody = styled.div`
    background-color: #ffc4c4;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    > p {
        font-size: 14px;
        margin: 6px;
    }
    > span {
        font-size: 10px;
        color: #606060;
        margin: 6px;
    }
`;
