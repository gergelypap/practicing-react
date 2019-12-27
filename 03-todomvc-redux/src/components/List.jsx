import React from "react";
import "./List.css";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

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

const mapStateToProps = state => {
  return {
    items: state.todoReducer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: id => {
    dispatch(toggleTodo(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
