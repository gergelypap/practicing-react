import React from "react";
import "./Form.css";

const Form = ({ value, submitDisabled, onSubmit, onChange }) => (
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

export default Form;
