import styled, { css } from 'styled-components';
import ClearButton from '@/assets/Modal/Button_clear@3x.png';
import SearchButton from '@/assets/Modal/button-search.png';

export const ModalWrapper = styled.div`
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalBox = styled.div`
  width: 25rem;
  height: 31.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0.375rem 0.375rem 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media screen and (max-width: 399px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-height: 499px) {
    height: auto;
    > header {
      margin-bottom: auto;
    }
  }
  @media screen and (max-height: 499px) and (max-width: 399px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 1.75rem;
  padding: 0.75rem 0.75rem 0 0;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 3.25rem;
`;

export const CloseButton = styled.button`
  outline: none;
  background-color: #ffffff;
  width: 16px;
  height: 16px;
  object-fit: contain;
  cursor: pointer;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const CloseButtonImage = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(${ClearButton});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: -0.2px;
`;

export const ModalContentWrapper = styled.div`
  padding: 0 3.25rem;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  display: inline-block;
  width: auto;
  height: 2.125rem;
  font-family: NanumSquareR;
  font-size: 1.875rem;
  line-height: 2.125rem;
  font-weight: normal;
  text-align: center;
`;

type SubTitleProps = {
  contour?: boolean;
  error?: boolean;
  effect?: boolean;
  normal?: string;
};

export const SubTitle = styled.div<SubTitleProps>`
    transition: width 1s;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;

    ${({ contour, color, effect }) =>
      contour &&
      css`
        margin: 2.5rem 0 3.125rem 0;
        width: ${effect ? '0' : '9.375'}rem;
        height: 0.125rem;
        background-color: ${color};
      `}
    ${({ error, effect }) =>
      error &&
      css`
        width: ${effect ? '0' : '14.25'}rem;
        margin: 2.125rem 0 2.625rem 0;
        height: 1rem;
        font-family: NanumSquareR;
        font-size: 0.857rem;
        text-align: center;
        color: #ff5c5c;
        line-height: 1rem;
      `}
    ${({ normal, effect }) =>
      normal &&
      css`
        width: ${effect ? '0' : '3.5'}rem;
        height: 1.375rem;
        font-family: NanumSquareB;
        font-size: 20px;
        line-height: 1.375rem;
        text-align: right;
        color: #46b2c6;
        margin: 1.875rem 0 2.5rem 0;
      `}
`;

export const ModalInputWrapper = styled.div`
  width: 17rem;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: #effbfd;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 0.75rem;
`;

export const ModalInputBox = styled.span`
  width: 100%;
  display: block;
`;

type StyledInputProps = {
  textCenter?: boolean;
};
export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  position: relative;
  padding: 0.25rem 0;
  border: none;
  height: 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  background-color: transparent;
  color: #89d5e2;
  outline: none;
  text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
  &:focus {
    color: #606060;
  }
  &::-webkit-input-placeholder {
    font-family: NanumSquareR;
    font-size: 0.875rem;
    text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
    color: #78cede;
    background: transparent;
  }
  &::-moz-placeholder {
    font-family: NanumSquareR;
    font-size: 0.875rem;
    font-style: normal;
    text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
    color: #78cede;
    background: transparent;
  }
  &:-ms-input-placeholder {
    font-family: NanumSquareR;
    font-size: 0.875rem;
    font-style: normal;
    text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
    color: #78cede;
    background: transparent;
  }
  &:-moz-placeholder {
    font-family: NanumSquareR;
    font-size: 0.875rem;
    font-style: normal;
    text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
    color: #78cede;
    background: transparent;
  }
  &::placeholder {
    font-family: NanumSquareR;
    font-size: 0.875rem;
    font-style: normal;
    text-align: ${({ textCenter }) => (textCenter ? 'center' : 'left')};
    color: #78cede;
    background: transparent;
  }
`;

export const ModalButtonListWrapper = styled.div`
  display: flex;
  width: 17rem;
  height: 2.5rem;
  margin-bottom: 2rem;
`;

export type ModalButtonProps = {
  color: string;
  size: string;
};

export const StyledModalButton = styled.button<ModalButtonProps>`
  flex: 1;
  height: 2.5rem;
  border-radius: 0.25rem;
  width: 17rem;
  background-color: ${props => props.color};
  font-family: NanumSquareB;
  font-size: 16px;
  line-height: 1.13;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 3px 0 0 0;
  cursor: pointer;
  margin-right: 0.625rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const ETCSentence = styled.p`
  width: auto;
  height: 0.8125rem;
  line-height: 0.8125rem;
  font-family: NanumSquareR;
  font-size: 12px;
  text-align: center;
  color: #78cede;
  cursor: pointer;
  &:last-child {
    margin-top: 0.75rem;
  }
`;

export const ExplainSentence = styled.p`
  margin: 1.125rem 0 2.25rem 0;
  width: auto;
  height: 0.8125rem;
  line-height: 0.8125rem;
  font-family: NanumSquareL;
  font-size: 12px;
  text-align: center;
  color: #000000;
  font-weight: 300;
`;

export const MoreExplainSentence = styled.pre`
  width: auto;
  height: 1.4375rem;
  font-family: NanumSquareR;
  font-size: 9px;
  text-align: center;
  color: #78cede;
  line-height: 1.34;
  letter-spacing: -0.06px;
`;

export const IconImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  margin-bottom: 2.0625rem;
`;

export const WarningWrapper = styled.pre`
  width: 20.625rem;
  height: 7.75rem;
  font-family: NanumSquareR;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin-bottom: 3.125rem;
`;

export const WarningFocus = styled.span`
  font-family: NanumSquareB;
  color: #ff6969;
`;

export const SearchModalBox = styled(ModalBox)`
  width: 31.5rem;
  height: 37.5rem;
`;

export const SearchModalHeader = styled(ModalHeader)`
  justify-content: space-between;
  margin: 0;
  height: auto;
`;

export const SearchModalTitle = styled.p`
  font-size: 1.25rem;
  color: #606060;
  margin: 24px 32px;
`;

export const SearchModalInputDiv = styled.div`
  width: 100%;
  padding: 24px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

type InputType = {
  width?: string;
  leftMargin?: string;
};

export const SearchModalInput = styled.div<InputType>`
  position: relative;
  width: ${props => (props.width ? props.width : '436px')};
  height: 40px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  margin-left: ${props => (props.leftMargin ? props.leftMargin : '0px')};
  > input {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #ffffff;
    padding: 11px 16px;
    font-size: 16px;
    color: #606060;
    box-sizing: border-box;
  }
  > img {
    background-image: url(${SearchButton});
    position: absolute;
    margin: auto;
    top: 50%;
    right: 1%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border: none;
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: contain;
  }
`;

export const SearchModalResult = styled.div`
  overflow-y: scroll;
  width: 436px;
  height: 400px;
  padding: 24px 32px;
  padding-top: 0px;
`;

export const SearchModalContent = styled.div`
  border-bottom: 1px solid #c9c9c9;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 7px;
  box-sizing: border-box;
  justify-content: space-between;
  > div {
    display: flex;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    > div > p {
      margin: 5px;
    }
  }
  > p {
    color: #606060;
  }
`;
export const SearchModalCategory = styled.p`
  font-size: 0.625rem;
  font-weight: 200;
`;

export const SearchModalContentText = styled.p`
  font-size: 0.625rem;
  font-weight: 100;
  &.school {
    font-size: 0.875rem;
    font-weight: 300;
  }
`;
