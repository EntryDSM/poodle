import React, { FC, useCallback, useState } from 'react';
import * as S from '@/styles/common/Modal';

interface Props {
  modalOff: () => void;
}

const NoticeModal: FC<Props> = ({ modalOff }) => {
  const [isAble, ableChange] = useState<boolean>(false);
  const preventBubling = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
    },
    [],
  );
  const modalClose = useCallback(() => {
    localStorage.setItem('isReadNotice', 'true');
    modalOff();
  }, []);
  const buttonClickHandler = useCallback(() => {
    ableChange(!isAble);
  }, [isAble, ableChange]);
  return (
    <S.ModalContentWrapper>
      <S.NoticeModal onClick={preventBubling}>
        <S.NoticeTitleWrapper>
          <S.NoticeModalTitle>원서 접수 시 유의사항</S.NoticeModalTitle>
          <S.NoticeTitleBar />
        </S.NoticeTitleWrapper>
        <S.NoticeModalBody>
          <div>
            <p className='title'>공통</p>
            <p className='text'>
              가. 입학 원서 작성 중 마지막 수정을 기준으로 3초 이후에 자동 저장
              됩니다.
            </p>
            <p>
              나. 문의 사항이 있으시면 우측 하단의 버튼을 눌러 QnA를 이용 하실
              수 있습니다.
            </p>
            <p className='title'>전형 선택</p>
            <p className='text'>
              &nbsp;&nbsp;가.
              졸업 연도·월(검정고시의 경우 합격 연도·월)을 정확하게 입력해주세요.
            </p>
            <p className='text'>  나. 특기 사항은 1개만 체크 할 수 있습니다.</p>
            <p className='text'>
                다. 사회통합 전형일 경우 세부 전형을 정확하게 입력해주세요.
            </p>
            <p className='title'>정보 입력</p>
            <p className='text'>
              &nbsp;&nbsp;가.검정고시 합격자와 졸업예정자 및 졸업자의 화면이 다르므로 전형을 정확하게 선택해주세요
              <p />
                    (화면에 학교 입력창이 있을 경우 검정고시 합격자 화면입니다.)
            </p>
            <p className='text'>  나. 이미지 첨부 시 확장자를 확인해주세요.</p>
            <p className='text'>
                다. 주소 입력 시 도로명을 전부 입력해주셔야 합니다.
            </p>
            <p className='text'>
              &nbsp;&nbsp;라. 전화번호 입력 시 -를 넣지 않고 숫자만 입력하시길
              바랍니다.
            </p>
            <p className='text'>
                마. 자동저장은 입력 후 3초 동안 변화가 없으면 저장됩니다.
            </p>
            <p className='title'>성적 입력 </p>
            <p className='text'>
              &nbsp;&nbsp;가.배우지 않은 과목 또는 자유학기제 기간 동안의 과목은 x로 입력해주세요.
              <p />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;즉,
              생활기록부에 성적이 기재되어있지 않은 과목에 대해서는 x로 입력해주시면 됩니다.
            </p>
            <p className='title'>최종 제출 및 원서 확인 </p>
            <p className='text'>
                가. 작성되지 않은 부분이 있거나,
              입력에 오류가 있는 경우 제출되지 않습니다.
            </p>
            <p className='text'>
                나. 제출되지 않는 경우 작성 및 입력한 부분을 확인해주세요.
            </p>
          </div>
        </S.NoticeModalBody>
        <S.NoticeApprove>
          <S.CheckboxDiv>
            <p>위 내용을 잘 숙지하였고, 동의합니다</p>
            <input
              type='checkbox'
              checked={isAble}
              onClick={buttonClickHandler}
            />
            <div />
          </S.CheckboxDiv>
        </S.NoticeApprove>
        <S.NoticeApproveButtonWrapper>
          <S.NoticeApproveButton onClick={() => (isAble ? modalClose() : '')}>
            확인
          </S.NoticeApproveButton>
        </S.NoticeApproveButtonWrapper>
      </S.NoticeModal>
    </S.ModalContentWrapper>
  );
};

export default NoticeModal;
