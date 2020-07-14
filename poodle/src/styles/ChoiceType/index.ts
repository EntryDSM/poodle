import styled from 'styled-components';

export const TypeDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TypeMain = styled.div`
  width: 1170px;
  margin: 100px;
  > li {
    border: 1px solid #1d7f91;
    border-left: 0;
    border-right: 0;
    list-style: none;
    margin-bottom: 60px;
  }
`;

export const TypeElement = styled.ul`
  width: 100%;
  height: 84px;
  border-bottom: solid 1px #dbdbdb;
  display: flex;
  align-items: center;
  padding: 0px 28px 0px 16px;
  box-sizing: border-box;
`;

export const TypeElementName = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const TypeElementContent = styled.div`
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
  }
  > div > label {
    min-width: 170px;
    margin-right: 60px;
  }
  > div > label.checkboxRadio {
    min-width: 0px;
    margin-right: 0px;
  }
  > div > div.checkbox {
    position: relative;
  }
`;
