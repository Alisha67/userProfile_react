import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import EditFormModal from "./EditFormModal";
import UploadAvatar from "./UploadAvatar";

const UserProfileContainer = () => {
  const { username, email, description ,avatar } = useSelector(
    (state) => state.userProfile
  );
  return (
    <>
      <section className="userProfile">
        <Container>
          <div className="wrapper">
             <div className="userAvatar">
          
              <img src={avatar} alt="" className="img-fluid user_avatar" type="file" />
              
               <UploadAvatar/>
            </div>
              <div className="userInfo">
              <div className="user_name">
                <span>{username} </span>
              </div>
              <div className="user_email">
                <span>{email}</span>
              </div>
              <div className="user_descrip">
                <span>{description}</span>
              </div>
              <div className="edit_btn">
                <EditFormModal />
              </div>
            </div>
    
          </div>
        </Container>
      </section>
    </>
  );
};

export default UserProfileContainer;
