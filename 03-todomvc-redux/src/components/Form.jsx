import React from "react";
import "./Form.css";
import PropTypes from "prop-types";

const Form = ({ input, onSubmit, onChange }) => (
  <div>
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        name="input"
        value={input}
        className="form-input"
        placeholder="Enter a task..."
        onChange={onChange}
        autoFocus={true}
        autoComplete="off"
      />
      <button type="submit" className="form-submit" disabled={input === ""}>
        Add
      </button>
    </form>
  </div>
);

Form.propTypes = {
  input: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
