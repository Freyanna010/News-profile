import type { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
  okButtonText?: string;
  cancelButtonText?: string;
  isButonCancel?: boolean;
}
