import React from "react";
import "./List.css";
import { connect } from "react-redux";

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
          // onClick={onClick(item)}
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
  // onClick: text => {
  //   dispatch(addTodo(text));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
