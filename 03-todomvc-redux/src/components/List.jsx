import React from "react";
import "./List.css";

const List = ({ todos, onClick }) => {
  if (!todos.length) {
    return <p>No tasks</p>;
  }
  return (
    <div className="list">
      {todos.map(item => (
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

export default List;
