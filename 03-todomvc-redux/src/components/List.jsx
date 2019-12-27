import React from "react";
import "./List.css";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ todos, onClick }) => (
  <div className={"list" + (!todos.length ? " list--empty" : "")}>
    {todos.length
      ? todos.map(item => (
          <ListItem key={item.id} item={item} onClick={onClick} />
        ))
      : "No tasks"}
  </div>
);

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      done: PropTypes.bool
    })
  ),
  onClick: PropTypes.func.isRequired
};

export default List;
