import React from "react";
import "./Form.css";
import PropTypes from "prop-types";

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

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
