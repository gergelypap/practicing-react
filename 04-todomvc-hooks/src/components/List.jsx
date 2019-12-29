import React, { useContext } from "react";
import "./List.css";
import ListItem from "./ListItem";
import { clearTodos, completeTodos, toggleTodo } from "../actions/todoActions";
import Context from "../store/context";
import { FILTER } from "../constants";

function getFilteredTodos(filter, todos) {
  switch (filter) {
    case FILTER.SHOW_COMPLETED:
      return todos.filter(item => item.done);
    case FILTER.SHOW_PENDING:
      return todos.filter(item => !item.done);
    default:
      return todos;
  }
}

export default function() {
  const [state, dispatch] = useContext(Context);
  const filteredTodos = getFilteredTodos(state.filter, state.todos);

  if (!filteredTodos.length) {
    return <div className="list list--empty">No tasks</div>;
  }
  return (
    <div className="list">
      {filteredTodos.map(item => (
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
