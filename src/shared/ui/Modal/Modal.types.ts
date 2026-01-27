import type { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
  image?: string;
  okButtonText?: string;
  cancelButtonText?: string;
}
