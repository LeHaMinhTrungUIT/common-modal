import React, { ReactNode } from "react";
import "./index.scss";
import CLOSE_ICON from "../../../asset/icon/close-icon.svg";

interface IModalProps {
  header?: ReactNode | string;
  children: ReactNode | string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  maskClosable?: boolean;
  footer?: ReactNode | string;
  closeIcon?: ReactNode | null;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  className?: string;
  interactionOutside?: boolean;
}
const Modal = (props: IModalProps) => {
  const {
    header,
    children,
    open,
    setOpen,
    maskClosable = false,
    footer,
    closeIcon,
    okText = "OK",
    cancelText = "Cancel",
    onOk = () => {},
    onCancel = () => {},
    className = "",
    interactionOutside = false,
  } = props;

  const onCloseModal = () => setOpen(false);

  const onClickMask = () =>
    (maskClosable || closeIcon === null) && onCloseModal();

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
        <div className={`modal-container ${interactionOutside ? "interaction-outside" : ""}`}>
          <div
            className={`modal ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {renderCloseIcon()}
            {header && <div className="header">{header}</div>}
            <div className="children">{children}</div>
            <div className="footer">{renderFooter()}</div>
          </div>
          {!interactionOutside && (
            <div className="modal-overlay" onClick={() => onClickMask()}></div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
