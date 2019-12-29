import React from "react";
import "./List.css";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ todos, toggleTodo, clearTodos, completeTodos }) => {
  if (!todos.length) {
    return <div className="list list--empty">No tasks</div>;
  }
  return (
    <div className="list">
      {todos.map(item => (
        <ListItem key={item.id} item={item} onClick={toggleTodo} />
      ))}
      <button className="list-button" onClick={clearTodos}>
        Clear all
      </button>
      <button className="list-button" onClick={completeTodos}>
        Complete all
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
  toggleTodo: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired,
  completeTodos: PropTypes.func.isRequired
};

export default List;
