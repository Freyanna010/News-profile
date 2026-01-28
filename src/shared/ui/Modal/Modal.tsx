import { useRef, type FC } from 'react';
import { SlClose } from 'react-icons/sl';
import { createPortal } from 'react-dom';

import { useClickOutside } from '@/shared/libs/useClickOutside';
import { useScrollLock } from '@/shared/libs';

import classes from './Modal.module.scss';
import type { ModalProps } from './Modal.types';
import { Button } from '../Button';

const Modal: FC<ModalProps> = ({
  isOpen,
  onCancel,
  onOk,
  children,
  okButtonText = 'Ok',
  cancelButtonText = 'Cancel',
  isButonCancel = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onCancel, isOpen);
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modalContainer} ref={modalRef}>
        <div className={classes.modalHeader}>
          <Button
            onClick={onCancel}
            icon={<SlClose size={20} />}
            variant="text"
          />
        </div>

        <div className={classes.modalContent}>{children}</div>
        <div className={classes.modalFooter}>
          <Button variant="solid" onClick={onOk} text={okButtonText} />
          {isButonCancel && (
            <Button
              variant="filled"
              onClick={onCancel}
              text={cancelButtonText}
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
