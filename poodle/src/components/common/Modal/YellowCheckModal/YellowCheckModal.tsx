import React, { FC } from 'react';
import { ModalContent, ModalButtonList } from '../';
import { YELLOW } from '@/lib/utils/style/color';

const YellowCheckModal: FC<{}> = () => {
    return (
        <ModalContent
            title='접근 오류'
            contour={true}
            color='#ffc033'
            explain='기간을 다시 한번 확인해 주세요'
            icon='YellowCheck'
        >
            <ModalButtonList buttonList={[{
                id: 1,
                title: '확인',
                size: 'max',
                onClick: () => {}
            }]}
                color={YELLOW}
            />
        </ModalContent>
    );
}

export default YellowCheckModal;