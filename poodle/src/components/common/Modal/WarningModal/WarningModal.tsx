import React from 'react';
import { ModalContent, ModalButtonList } from '../';
import * as S from '../../../../styles/common/Modal';

function WarningModal() {
    return (
        <ModalContent
            title='주의사항'
            contour={true}
            color='#ff6969'
        >
            <S.WarningWrapper>
                미리보기 단계에서는 <S.WarningFocus>내신 성적</S.WarningFocus>이 표기되지 않습니다.{`\r\n`}
                (출력 시에는 정상적으로 표기됩니다.){`\r\n`}{`\r\n`}

                수험번호는 표기되지 않으며 <S.WarningFocus>접수 번호</S.WarningFocus>를{`\r\n`}
                확인하시기 바랍니다.{`\r\n`}{`\r\n`}

                <S.WarningFocus>서명, 날짜, 체크항목</S.WarningFocus> 등은 수기로 작성해 주시기 바랍니다.
            </S.WarningWrapper>
            <ModalButtonList buttonList={[{
                id: 1,
                title: '확인',
                size: 'max',
                onClick: () => {}
            }]}
                color='#ff6969'
            />
        </ModalContent>
    );
}

export default WarningModal;