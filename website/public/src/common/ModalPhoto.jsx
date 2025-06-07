import { Modal, Button, Image } from "react-bootstrap";

export default function ModalPhoto({ path }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Фотография</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center align-items-center"
          style={{
            minHeight: "50vh",
            padding: 0,
          }}
        >
          <Image
            src={path}
            style={{
              maxHeight: "80vh",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            fluid
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }