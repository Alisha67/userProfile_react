import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Btn as CustomButton } from "../../styleComponent/button.component";
import Formm from "./Formm";
function EditFormModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CustomButton $editBtn onClick={handleShow}>
        Edit Profile <i className="fa-solid fa-pen-to-square"></i>
      </CustomButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formm closeDialog={handleClose} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFormModal;
