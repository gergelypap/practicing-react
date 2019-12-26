import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onSubmit = () => {
    const title = this.input.current.value;
    if (!title) {
      return;
    }
    this.props.addTodo(title);
    this.input.current.value = "";
  };

  render() {
    return (
      <div>
        <form className="form" action="#" onSubmit={this.onSubmit}>
          <input
            className="form-input"
            ref={this.input}
            type="text"
            placeholder="Enter a task..."
          />
          <button className="form-submit" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
