import React, { Fragment } from "react";
import { connect } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => {
  return (
    <ListGroup className="text-center" variant="flush">
      {articles.map(a => (
        <ListGroup.Item key={a.id}>{a.title}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
