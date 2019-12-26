import React from "react";
import "./List.css";

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        {!this.props.items.length ? (
          <p>No tasks</p>
        ) : (
          this.props.items.map(item => (
            <span
              className={["list-item", item.done ? "list-item--done" : ""].join(
                " "
              )}
              key={item.id}
              onClick={() => this.props.onTodoClick(item)}
            >
              {item.title}
            </span>
          ))
        )}
      </div>
    );
  }
}
