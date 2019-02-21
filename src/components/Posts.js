import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getData } from "../redux/actions/index";

import ListGroup from "react-bootstrap/ListGroup";

export class Post extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <Fragment>
        <ListGroup variant="flush">
          {this.props.articles.map(a => (
            <ListGroup.Item key={a.id}>{a.title}</ListGroup.Item>
          ))}
        </ListGroup>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
