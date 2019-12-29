import {
  clearTodos,
  completeTodos,
  toggleTodo
} from "../store/actions/todoActions";
import React, { memo } from "react";
import ListItem from "./ListItem";
import "./List.css";
import PropTypes from "prop-types";

function List({ items, dispatch }) {
  if (!items.length) {
    return <div className="list list--empty">No tasks</div>;
  }
  return (
    <div className="list">
      {items.map(item => (
        <ListItem
          key={item.id}
          text={item.text}
          done={item.done}
          onClick={() => dispatch(toggleTodo(item.id))}
        />
      ))}
      <button className="list-button" onClick={() => dispatch(clearTodos())}>
        Clear all
      </button>
      <button className="list-button" onClick={() => dispatch(completeTodos())}>
        Complete all
      </button>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      done: PropTypes.bool
    })
  ),
  dispatch: PropTypes.func.isRequired
};

export default memo(List, (prevProps, nextProps) => {
  return prevProps.items === nextProps.items;
});
