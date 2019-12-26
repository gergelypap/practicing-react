import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  state = {
    submitDisabled: true
  };

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
    this.setState({
      submitDisabled: true
    });
  };

  componentDidMount() {
    this.input.current.focus();
  }

  onInputChange = event => {
    this.setState({
      submitDisabled: event.target.value === ""
    });
  };

  render() {
    return (
      <div>
        <form className="form" action="#" onSubmit={this.onSubmit}>
          <input
            type="text"
            ref={this.input}
            className="form-input"
            placeholder="Enter a task..."
            onChange={this.onInputChange}
          />
          <button
            className="form-submit"
            type="submit"
            disabled={this.state.submitDisabled}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
