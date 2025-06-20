import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";

interface CommonModalProps {
  show: boolean;
  onHide: any;
  size?: "lg" | "xl" | "sm";
  topImage?: any;
  close?: boolean | undefined;
}

const CommonModal: FunctionComponent<CommonModalProps> = ({
  show,
  onHide,
  topImage,
  close,
  children,
  size,
}) => {
  return (
    <Modal size={size} centered show={show} onHide={onHide}>
      <div className="d-flex c-modal">
        <Modal.Body style={{ flexGrow: "auto" }}>
          {(topImage || close) && (
            <Modal.Header closeButton={close} bsPrefix="CommonModal header">
              {topImage && (
                <img className="top-image" src={topImage} alt="Top" />
              )}
            </Modal.Header>
          )}
          <div className="content">{children}</div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default CommonModal;
