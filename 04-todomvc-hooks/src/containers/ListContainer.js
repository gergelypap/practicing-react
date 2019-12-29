import React, { useContext } from "react";
import Context from "../store/context";
import { FILTER } from "../constants";
import List from "../components/List";

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
  const [{ filter, todos }, dispatch] = useContext(Context);
  const filteredTodos = getFilteredTodos(filter, todos);

  return <List dispatch={dispatch} items={filteredTodos} />;
}
