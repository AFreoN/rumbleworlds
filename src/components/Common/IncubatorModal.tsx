import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import CommonButton from "./CommonButton";
import incubatorBackground from "assets/mint/modal/background.jpg";

interface IncubatorModalProps {
  show: boolean;
  onHide: any;
  type?: "Common" | "Rare" | "Epic" | "Legendary" | "Mythical";
  incubatorImg: string | undefined;
}

const IncubatorModal: FunctionComponent<IncubatorModalProps> = ({
  show,
  onHide,
  children,
  incubatorImg,
}) => {
  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={onHide}
      contentClassName="flex-lg-row incubator-modal"
    >
      <div className="d-flex">
        <div className="modal-left">
          <img
            className="spin-bg w-100 h-100"
            src={incubatorBackground}
            alt="Incubator Background"
          />
          <img className="mint-image" src={incubatorImg} alt="Incubator" />
        </div>
        <Modal.Body>
          <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
          <div className="content text-center">{children}</div>
          <CommonButton className="rw-btn-primary w-100" onClick={onHide}>
            Adopt Another
          </CommonButton>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default IncubatorModal;
