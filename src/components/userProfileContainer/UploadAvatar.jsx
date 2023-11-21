import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Btn as CustomButton } from "../../styleComponent/button.component";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import {updateAvatar} from '../../reducers/UserProfileSlice'

function UploadAvatar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [avatarFile ,setAvatarFile] = useState()
  const dispatch = useDispatch();

  
  const handleSubmit= async (e)=>{
    e.preventDefault()
    let convertedImage = await getBase64(avatarFile);
     dispatch(updateAvatar(convertedImage))
     setShow(false);
  }

  async function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }
  return (
    <>
      <CustomButton $editBtn onClick={handleShow} className="upload-avatar-btn">
        <i className="fa-solid fa-camera"></i>
      </CustomButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="file"
         placeholder="" 
         name="avatar"
         onChange={e => setAvatarFile(e.target.files[0])}
      
         />
        </Form.Group>
        
        <CustomButton variant="secondary" type="submit">
          upload
        </CustomButton>
           </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default UploadAvatar;
