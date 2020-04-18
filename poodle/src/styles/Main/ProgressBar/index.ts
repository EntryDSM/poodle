import styled from 'styled-components';
import { 
    AllFinish,
    Finish,
    Ing,
    XIcon
} from '@/assets/Main/ProgressBar';

export const ProgressBarWrapper = styled.div`
    width: 285px;
    height: 1020px;
    background-color: #c2f3fa;
`;

export const ProgressBox = styled.div`
    margin-top: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ProgressItemWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    > a {
        text-decoration: none;
    }
    > a:last-child {
        height: 60px;
    }
`;

export const ProgressTitle = styled.span<{ ing: boolean }>`
    height: 26px;
    font-family: NanumSquareB;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.6px;
    color: ${({ ing }) => ing ? '#46b2c6' : '#7e7e7e'};
    display: inline-block;
    padding-top: 5px;
`;

export const StatusImage = styled.img.attrs<{ ing: boolean }>((props) => ({
    src: props.ing && XIcon
}))<{ ing: boolean }>`
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-left: 16px;
`;

export const VerticalLine = styled.div`
    width: 3px;
    height: 90px;
    display: flex;
    margin-right: 27px;
    background-color: #7e7e7e;
    margin: 10px 27px 10px 0;
`;