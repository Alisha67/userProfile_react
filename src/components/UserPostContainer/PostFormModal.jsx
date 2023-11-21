import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { Btn as CustomButton } from "../../styleComponent/button.component";
import PostForm from "./PostForm";

function PostFormModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CustomButton $postBtn onClick={handleShow}>
        Post <i className="fa-sharp fa-solid fa-plus"></i>
      </CustomButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm closeDialog={handleClose} />{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default PostFormModal;
