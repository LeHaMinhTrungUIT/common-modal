import React, { ReactNode } from "react";
import "./index.scss";
import CLOSE_ICON from "../../../asset/icon/close-icon.svg";
import { MASK_TYPE } from "../../../constants/modal";

interface IModalProps {
  header?: ReactNode | string;
  children: ReactNode | string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  maskType?: MASK_TYPE;
  footer?: ReactNode | string;
  closeIcon?: ReactNode | null;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  className?: string;
}
const Modal = (props: IModalProps) => {
  const {
    header,
    children,
    open,
    setOpen,
    maskType = MASK_TYPE.DEFAULT,
    footer,
    closeIcon,
    okText = "OK",
    cancelText = "Cancel",
    onOk = () => {},
    onCancel = () => {},
    className = "",
  } = props;

  const onCloseModal = () => setOpen(false);

  const onClickMask = () =>
    (maskType === MASK_TYPE.CLOSABLE || closeIcon === null) && onCloseModal();

  const renderCloseIcon = () =>
    closeIcon ? (
      <>{closeIcon}</>
    ) : closeIcon === null ? (
      <></>
    ) : (
      <img
        src={CLOSE_ICON}
        alt="close-icon"
        className="close-icon"
        onClick={() => onCloseModal()}
      />
    );

  const renderFooter = () =>
    footer ? (
      <>{footer}</>
    ) : footer === null ? (
      <></>
    ) : (
      <>
        <button onClick={() => onClickCancel()} className="action-btn">
          {cancelText}
        </button>
        <button onClick={() => onClickOk()} className="action-btn">
          {okText}
        </button>
      </>
    );

  const onClickCancel = () => {
    onCancel();
    onCloseModal();
  };

  const onClickOk = () => {
    onOk();
    onCloseModal();
  };

  return (
    <>
      {open && (
        <div
          className={`modal-container ${
            maskType === MASK_TYPE.NONE ? "interaction-outside" : ""
          }`}
        >
          <div
            className={`modal ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {renderCloseIcon()}
            {header && <div className="header">{header}</div>}
            <div className="children">{children}</div>
            <div className="footer">{renderFooter()}</div>
          </div>
          {maskType !== MASK_TYPE.NONE && (
            <div className="modal-overlay" onClick={() => onClickMask()}></div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
