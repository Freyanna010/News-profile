import { useRef, type FC } from 'react';
import { SlClose } from 'react-icons/sl';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import { useClickOutside } from '@/shared/libs/useClickOutside';
import { useScrollLock } from '@/shared/libs';

import classes from './Modal.module.scss';
import type { ModalProps } from './Modal.types';
import { Button } from '../Button';

const Modal: FC<ModalProps> = (props) => {
  const {
    onOk,
    onCancel,
    image,
    okButtonText = 'Ok',
    cancelButtonText = 'Cancel',
    children,
    isOpen,
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, onCancel, isOpen);
  useScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.modalContainer} ref={modalRef}>
        {image && <img src={image} className={classes.modalImage} />}

        <div className={classes.modalContent}>
          <Button
            className={classes.closeButton}
            variant="text"
            onClick={onCancel}
            icon={<SlClose />}
          />

          {children}

          <div className={classes.rowButton}>
            <Button
              className={clsx(classes.buttons, classes.okButton)}
              onClick={onOk}
              variant="filled"
              text={okButtonText}
            />
            <Button
              className={clsx(classes.buttons, classes.cancelButton)}
              onClick={onOk}
              variant="outlined"
              text={cancelButtonText}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
