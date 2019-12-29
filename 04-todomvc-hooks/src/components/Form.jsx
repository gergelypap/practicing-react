import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

function Form({ input, error, handleSubmit, handleChangeInput }) {
  return (
    <form
      className={"form" + (error ? " form--has-error" : "")}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="input"
        value={input}
        className="form-input"
        placeholder={"What is your plan?"}
        onChange={handleChangeInput}
        autoFocus={true}
        autoComplete="off"
      />
      <button type="submit" className="form-submit" disabled={input === ""}>
        Add
      </button>
      {error ? <span className="form-error">{error}</span> : ""}
    </form>
  );
}

Form.propTypes = {
  input: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired
};

export default Form;
