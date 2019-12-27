import React from "react";
import "./List.css";
import PropTypes from "prop-types";

const List = ({ todos, onClick }) => {
  if (!todos.length) {
    return <p>No tasks</p>;
  }
  return (
    <div className="list">
      {todos.map(item => (
        <span
          className={"list-item" + (item.done ? " list-item--done" : "")}
          key={item.id}
          onClick={() => onClick(item.id)}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

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
