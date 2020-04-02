import React from 'react';
import { ModalContent, ModalButtonList } from '../';

function BlueCheckModal() {
    return (
        <ModalContent
            title='정말 제출하시겠습니까?'
            contour={true}
            color='#56c2d6'
            explain='제출하면 다시 수정할 수 없으니 다시 한번 확인해 주세요'
            icon='BlueCheck'
        >
            <ModalButtonList buttonList={[{
                id: 1,
                title: '제출',
                size: 'max',
                onClick: () => {}
            }]}
                color='#56c2d6'
            />
        </ModalContent>
    );
}

export default BlueCheckModal;