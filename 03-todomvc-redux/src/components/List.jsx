import React from "react";
import "./List.css";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ todos, onClick, onClearAll }) => {
  if (!todos.length) {
    return <div className="list list--empty">No tasks</div>;
  }
  return (
    <div className="list">
      {todos.map(item => (
        <ListItem key={item.id} item={item} onClick={onClick} />
      ))}
      <button className="list-button" onClick={onClearAll}>
        Clear all
      </button>
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
  onClick: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired
};

export default List;
