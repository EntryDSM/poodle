import styled from 'styled-components';

export const IntroductionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const IntroductionMain = styled.div`
  width: 1170px;
  margin: 100px;
`;

export const IntroductionSubTitle = styled.span`
  font-size: 24px;
  border-bottom: 2px solid #a9e6f2;
  padding: 4px;
`;

export const IntroductionDescription = styled.div`
  font-size: 18px;
  margin: 22px 0px;
`;

export const IntroductionTextarea = styled.div`
  width: 100%;
  border: 1.5px solid #606060;
  border-radius: 4px;
  height: 400px;
  margin-bottom: 40px;
  padding: 1px;
  > div {
    width: 100%;
    height: 31px;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0px 0px 4px 4px;
    transition: 0.3s;
    > p {
      margin-right: 16px;
    }
  }
  > textarea {
    height: 364px;
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 20px;
    font-size: 18px;
    border-radius: 4px;
    line-height: 1.4;
  }
  > textarea:focus ~ div {
    background-color: #cbeaf0;
  }
`;
