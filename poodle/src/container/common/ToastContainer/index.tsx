import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import Toast from '@/components/default/common/Toast';

type ToastType = 'ERROR' | 'SUCCESS';

interface ToastInfo {
  title: string;
  description: string;
  type: ToastType;
  id: string;
}

const getSuccessToastInfo = (id: string): ToastInfo => ({
  type: 'SUCCESS',
  description: '',
  title: '자동 저장 되었습니다.',
  id: id,
});

const getFailToastInfo = (id: string): ToastInfo => ({
  type: 'ERROR',
  description: '모든 작성 후 제출을 해주세요.',
  title: '작성되지 않은 부분이 있습니다',
  id: id,
});

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
    const newToast: ToastInfo =
      type === 'ERROR' ? getFailToastInfo(id) : getSuccessToastInfo(id);
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
    toasts.map(({ title, description, id, type }) => {
      buf.push(
        <Toast
          title={title}
          description={description}
          type={type}
          id={id}
          key={id}
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
}

export default ToastController;