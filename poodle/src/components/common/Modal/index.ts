export { default as Modal } from './Modal';
export { default as ModalBox } from './ModalBox';
export { default as ModalButtonList } from './ModalButtonList';
export { default as ModalContent } from './ModalContent';
export { default as ModalInput } from './ModalInput';

export { default as BlueCheckModal } from './BlueCheckModal/BlueCheckModal';
export { default as YellowCheckModal } from './YellowCheckModal/YellowCheckModal';
export { default as RedErrorModal } from './RedErrorModal/RedErrorModal';
export { default as WarningModal } from './WarningModal/WarningModal';

export type ModalContentProps = {
    children?: React.ReactNode,
    title: string,
    contour?: boolean,
    normal?: string,
    error?: string,
    explain?: string[] | string,
    color: string,
    icon?: string
}