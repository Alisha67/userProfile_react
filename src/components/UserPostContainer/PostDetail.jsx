import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Btn as CustomButton } from "../../styleComponent/button.component";
import { Button } from "react-bootstrap";
import "./style.scss";
const PostDetail = () => {
  const navigate = useNavigate();
  let { index } = useParams();
  const post = useSelector((state) => state.userPost.posts[index] || null);

  useEffect(() => {
    console.log("post", post);
  }, []);
  if (!post) {
    return <p> Not found</p>;
  }

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="postDetail">
      <div className="container">
        <div className="pst_detail">
          <div className="wrapper">
            <Button
              variant="light"
              className="mb-2 rounded rounded-circle"
              onClick={handleClick}
            >
              {" "}
              <i className="fa-solid fa-arrow-left"></i>
            </Button>
            <div className="img_div">
              <img src={post.image} alt="" className="src" width="100%" />
            </div>
            <div className="title_">
              <span>{post.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
