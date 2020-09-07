import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import Toast from '@/components/default/common/Toast';

export type ToastType =
  | 'ERROR'
  | 'SUCCESS'
  | 'SERVER_ERROR'
  | 'NETWORK_ERROR'
  | 'PHONE_NUM_ERROR';

interface ToastInfo {
  title: string;
  description: string;
  type: ToastType;
  id: string;
  isSuccess: boolean;
}

const getSuccessToastInfo = (id: string): ToastInfo => ({
  type: 'SUCCESS',
  description: '현재까지 작성된 내용을 자동으로 저장했습니다',
  title: '자동 저장 되었습니다.',
  id,
  isSuccess: true,
});

const getFailToastInfo = (id: string): ToastInfo => ({
  type: 'ERROR',
  description: '모든 작성 후 제출을 해주세요.',
  title: '작성되지 않은 부분이 있습니다',
  id,
  isSuccess: false,
});

const getServerFailToastInfo = (id: string): ToastInfo => ({
  type: 'SERVER_ERROR',
  description: '다시 시도해 주세요.',
  title: '서버에서 에러가 발생하였습니다.',
  id,
  isSuccess: false,
});

const getNetworkError = (id: string): ToastInfo => ({
  type: 'NETWORK_ERROR',
  description: '네트워크를 확인해 주세요.',
  title: '네트워크에 오류가 있습니다.',
  id,
  isSuccess: false,
});

const getPhoneNumError = (id: string): ToastInfo => ({
  type: 'PHONE_NUM_ERROR',
  description: '전화번호 형식이 잘못 되었습니다',
  title: '다시 한번 확인해 주세요.',
  id,
  isSuccess: false,
});

const getToastInfo = (type: ToastType, id: string) => {
  if (type === 'ERROR') {
    return getFailToastInfo(id);
  } else if (type === 'SERVER_ERROR') {
    return getServerFailToastInfo(id);
  } else if (type === 'NETWORK_ERROR') {
    return getNetworkError(id);
  } else if (type === 'PHONE_NUM_ERROR') {
    return getPhoneNumError(id);
  }
  return getSuccessToastInfo(id);
};

class ToastController {
  toastInfos: ToastInfo[];
  toasts: React.ReactNode[];
  count: number;
  parentId: string;
  constructor(parentId: string) {
    this.toastInfos = [];
    this.toasts = [];
    this.count = 0;
    this.parentId = parentId;
  }
  isToastOver() {
    return this.toastInfos.length > 5;
  }
  createNewToast(type: ToastType) {
    if (this.isToastOver()) return;
    const copy = this.toastInfos;
    const id = this.count.toString();
    const newToast: ToastInfo = getToastInfo(type, id);
    copy.push(newToast);
    this.count++;
    this.renderToastWithIds(copy);
    this.toastInfos = copy;
    this.deleteToastAfterDeleteTime(id);
  }
  renderToastWithIds(toasts: ToastInfo[]) {
    const newToasts = this.createToastNodes(toasts);
    const parentNode = document.getElementById(this.parentId);
    if (!parentNode) return;
    ReactDOM.render(createPortal(newToasts, parentNode), parentNode);
  }
  createToastNodes(toasts: ToastInfo[]) {
    const buf: React.ReactNode[] = [];
    toasts.map(({ title, description, id, type, isSuccess }) => {
      buf.push(
        <Toast
          title={title}
          description={description}
          type={type}
          id={id}
          key={id}
          isSuccess={isSuccess}
        />,
      );
    });
    return buf;
  }
  deleteToastId(id: String) {
    const copy = [...this.toastInfos];
    this.toastInfos = copy.filter(toast => toast.id !== id);
    return this.toastInfos;
  }
  deleteToastAfterDeleteTime(id: String) {
    setTimeout(() => {
      const updateIds = this.deleteToastId(id);
      this.renderToastWithIds(updateIds);
    }, 5000);
  }
  resetToast() {
    this.toastInfos = [];
  }
}

export default ToastController;
