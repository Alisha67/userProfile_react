import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import "./style.scss";
const PostCard = ({ post, id }) => {
  return (
    <>
      <NavLink to={`/post/${id}`}>
        <Card>
          <Card.Img variant="top" src={post.image} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
          </Card.Body>
        </Card>
      </NavLink>
    </>
  );
};

export default PostCard;
