import React from "react";
import "./Form.css";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const Form = ({ value, onSubmit, onChange }) => (
  <div>
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        name="input"
        value={value}
        className="form-input"
        placeholder="Enter a task..."
        onChange={onChange}
        autoFocus={true}
        autoComplete="off"
      />
      <button type="submit" className="form-submit" disabled={value === ""}>
        Add
      </button>
    </form>
  </div>
);

const mapStateToProps = ({ value }) => ({ value });

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: event => {
      event.preventDefault();
      const input = event.target.elements.input;
      dispatch(addTodo(input.value));
      input.value = "";
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
