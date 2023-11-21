import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "./PostCard";
import PostFormModal from "./PostFormModal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style.scss";
const UserPostContainer = () => {
  const { posts } = useSelector((state) => state.userPost);
  return (
    <>
      <section className="userPostConatiner">
        <Container>
          <Row>
            <Col lg={12} md={12} className="endline">
              <PostFormModal />
            </Col>
          </Row>
          <Row>
            {!posts.length ? (
              <>
                <p>No post available!</p>{" "}
              </>
            ) : (
              posts.map((post, index) => (
                <Col lg={3} md={3} key={index}>
                  <PostCard post={post} id={index} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserPostContainer;
