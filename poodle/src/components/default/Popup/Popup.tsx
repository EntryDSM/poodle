import React, { FC } from 'react';
import {
  PopupBody,
  PopupDiv,
  PopupImg,
} from '../../../styles/Popup';

interface Props {
    isError: boolean,
}

const Popup: FC<Props> = ({
  isError,
}) => (
  <PopupDiv isError={isError}>
    <PopupImg>
      <div />
    </PopupImg>
    <PopupBody>
      <p>작성되지 않는 부분이 있습니다</p>
      <span>모두 작성 후 최종 제출을 해주세요</span>
    </PopupBody>
  </PopupDiv>
);

export default Popup;
