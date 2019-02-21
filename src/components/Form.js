import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../redux/actions/index";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  state = {
    title: ""
  };

  handleChange = e =>
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button block id="myBtn" type="submit" variant="outline-success">
          SAVE
        </Button>
      </Form>
    );
  }
}

const CForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default CForm;
