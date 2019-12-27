import React from "react";
import "./List.css";
import classNames from "classnames";

const List = ({ todos, onClick }) => {
  if (!todos.length) {
    return <p>No tasks</p>;
  }
  return (
    <div className="list">
      {todos.map(item => (
        <span
          className={classNames("list-item", { "list-item--done": item.done })}
          key={item.id}
          onClick={() => onClick(item.id)}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default List;
