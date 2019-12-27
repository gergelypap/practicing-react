import React from "react";
import "./List.css";
import { connect } from "react-redux";
import { FILTER, toggleTodo } from "../actions";

const List = ({ items, onClick }) => {
  if (!items.length) {
    return <p>No tasks</p>;
  }
  return (
    <div className="list">
      {items.map(item => (
        <span
          className={["list-item", item.done ? "list-item--done" : ""].join(
            " "
          )}
          key={item.id}
          onClick={() => onClick(item.id)}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

const getFilteredTodos = (filter, todos) => {
  switch (filter) {
    case FILTER.SHOW_COMPLETED:
      return todos.filter(item => item.done);
    case FILTER.SHOW_PENDING:
      return todos.filter(item => !item.done);
    case FILTER.SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    filter: state.filterReducer,
    items: getFilteredTodos(state.filterReducer, state.todoReducer)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
