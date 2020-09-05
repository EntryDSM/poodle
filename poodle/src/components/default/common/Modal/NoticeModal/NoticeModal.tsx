import React, { FC, useCallback } from 'react';
import * as S from '@/styles/common/Modal';

interface Props {
  modalOff: () => void;
}

const NoticeModal: FC<Props> = ({ modalOff }) => {
  const preventBubling = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );
  return (
    <S.ModalContentWrapper>
      <S.NoticeModal onClick={preventBubling}>
        <S.NoticeHeader>
          <S.CloseButton onClick={modalOff}>
            <S.CloseButtonImage />
          </S.CloseButton>
        </S.NoticeHeader>
        <S.NoticeTitleWrapper>
          <S.NoticeModalTitle>원서 접수 시 유의사항</S.NoticeModalTitle>
          <S.NoticeTitleBar />
        </S.NoticeTitleWrapper>
        <S.NoticeModalBody>
          <p className='title'>전형 선택</p>
          <p className='text'>
            1. 졸업 구분 중, 졸업자는 졸업 연도와 월을 확실하게 선택해 주시고.
            검정고시 합격자는 합격 연도와 월을 확실하게 선택해 주세요.
          </p>
          <p className='text'>2. 특기 사항은 1가지만 체크할 수 있습니다.</p>
          <p className='text'>
            3. 사회 통합 전형일 경우에 전형을 확실하게 선택해 주세요.
          </p>
          <p className='title'>정보 입력</p>
          <p className='text'>
            1. 검정고시 합격자와 졸업예정자 및 졸업자의 화면이 다릅니다.
          </p>
          <p className='text'>
            검정고시 합격자이신 경우, 학교 입력창이 있으면 전형 선택을 다시한번
            확인해 주세요.
          </p>
          <p className='text'>
            2. 이미지를 삽입하실 때, 올바른 확장자를 가진 파일만 넣어주세요.
          </p>
          <p className='text'>
            3. 주소 입력 시, 완벽한 도로명 주소를 입력하셔야 검색이 됩니다. 이점
            유의하여 주세요.
          </p>
          <p className='text'>
            4. 전화번호 입력 시 -를 넣지 않고 숫자만 입력하시길 바랍니다.
          </p>
          <p className='text'>
            5. 자동저장은 입력하고 3초동안 변화가 없으면 저장됩니다.
          </p>
          <p className='title'>성적 입력 </p>
          <p className='text'>
            1. 학교에서 배우지 않거나, 그 학기에 배우지 않은 과목은 x 로 설정
            하시면 됩니다.
          </p>
          <p className='text'>
            2. 성적 입력 실수에 대한 책임은 작성자에게 있습니다.
          </p>
          <p className='text'>
            3. 성적 입력 실수 후 수정은 되지만 최종 제출 후에는 수정이
            불가능합니다.
          </p>
          <p className='title'>최종 제출 및 원서 확인 </p>
          <p className='text'>
            1. 이전에 작성하지 않은 부분이 있거나, 잘못 체크된 부분이 있으면
            제출되지 않습니다. 오류가 발생할 경우 이전에 작성한 부분을 확인해
            주세요.
          </p>
        </S.NoticeModalBody>
      </S.NoticeModal>
    </S.ModalContentWrapper>
  );
};

export default NoticeModal;
