import React, { FC } from 'react';
import { ModalContent, ModalButtonList } from '../';

const RedErrorModal: FC<{}> = () => {
    return (
        <ModalContent
            title='파일 오류'
            contour={true}
            color='#ff6969'
            explain='파일 형식이 올바른지 다시 한번 확인해 주세요'
            icon='RedError'
        >
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

export default RedErrorModal;