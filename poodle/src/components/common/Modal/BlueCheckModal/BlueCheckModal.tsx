import React, { FC } from 'react';
import { ModalContent, ModalButtonList } from '../';
import { BLUE } from '@/lib/utils/style/color';

const BlueCheckModal: FC<{}> = () => {
    return (
        <ModalContent
            title='정말 제출하시겠습니까?'
            contour={true}
            color={BLUE}
            explain='제출하면 다시 수정할 수 없으니 다시 한번 확인해 주세요'
            icon='BlueCheck'
        >
            <ModalButtonList buttonList={[{
                id: 1,
                title: '제출',
                size: 'max',
                onClick: () => {}
            }]}
                color={BLUE}
            />
        </ModalContent>
    );
}

export default BlueCheckModal;