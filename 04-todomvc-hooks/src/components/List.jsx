import {
  clearTodos,
  completeTodos,
  toggleTodo
} from "../store/actions/todoActions";
import React from "react";
import ListItem from "./ListItem";
import "./List.css";

export default function({ items, dispatch }) {
  if (!items.length) {
    return <div className="list list--empty">No tasks</div>;
  }
  return (
    <div className="list">
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
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
