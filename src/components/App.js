import React, { Fragment } from "react";
import "./App.css";
import List from "./List";
import CForm from "./Form";
import Post from "./Posts";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const app = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row className="py-5">
          <Col md={{ span: 4, offset: 1 }}>
            <h2 className="text-center">Add a new article</h2>
            <hr />
            <CForm />
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col className="py-4" md={4}>
            <h2 className="text-center">Articles</h2>
            <List />
          </Col>
          <Col className="py-4" md={5}>
            <h2 className="text-center">API posts</h2>
            <Post />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default app;
