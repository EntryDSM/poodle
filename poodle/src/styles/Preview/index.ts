import styled from 'styled-components';
import { downloadArrow } from '@/assets/Preview';

export const PREVIEW_HEADER_COLOR = '#353b3e';

export const PreviewDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const PreviewMain = styled.div`
  width: 1170px;
  margin: 100px;
`;

export const PreviewPdfDiv = styled.div`
  width: 100%;
  height: 982px;
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 40px;
  &:hover > div.pdfHeader {
    height: 50px;
    opacity: 1;
  }
`;

export const Loader = styled.div`
  width: 1170px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader,
  .loader:before,
  .loader:after {
    background: #0dc5c1;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .loader {
    color: #0dc5c1;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

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
`;

export const PreviewHeader = styled.div`
  width: 100%;
  height: 0px;
  background-color: ${PREVIEW_HEADER_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  transition: all 0.5s;
  opacity: 0;
  > p {
    color: white;
    font-size: 16px;
    width: 200px;
    text-align: center;
    margin: 20px;
  }
  > div {
    width: 200px;
    display: flex;
    justify-content: flex-end;
    padding: 0px 20px;
    > img {
      width: 30px;
      height: 30px;
    }
    > img:hover {
      width: 31px;
      height: 31x;
    }
  }
`;
