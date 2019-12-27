import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  state = {
    inputValue: "",
    error: null
  };

  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit() {
    const { inputValue } = this.state;
    if (inputValue.length === 0) {
      this.setState({ error: "You must enter a task!" });
      return;
    }
    if (this.props.todos.filter(todo => todo.title === inputValue).length) {
      this.setState({ error: "This task already exists!" });
      this.setState({ inputValue: "" });
      return;
    }
    this.props.onSubmit(inputValue);
    this.setState({
      inputValue: "",
      error: null
    });
    this.input.current.focus();
  }

  onInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            ref={this.input}
            value={this.state.inputValue}
            className="form-input"
            placeholder="Enter a task..."
            onChange={this.onInputChange}
            autoFocus={true}
          />
          <button
            type="submit"
            className="form-submit"
            disabled={this.state.inputValue.length === 0}
          >
            Add
          </button>
          {this.state.error ? (
            <span className="form-error">{this.state.error}</span>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}
