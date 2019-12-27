import React from "react";
import "./List.css";

const List = ({ items, onTodoClick }) => {
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
          onClick={() => onTodoClick(item)}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
};

export default List;
