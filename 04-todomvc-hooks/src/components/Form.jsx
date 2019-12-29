import React from "react";
import "./Form.css";
import PropTypes from "prop-types";

const Form = ({ form, onSubmit, onChange }) => {
  return (
    <form
      className={"form" + (form.error ? " form--has-error" : "")}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        name="input"
        value={form.input}
        className="form-input"
        placeholder={"What is your plan?"}
        onChange={onChange}
        autoFocus={true}
        autoComplete="off"
      />
      <button
        type="submit"
        className="form-submit"
        disabled={form.input === ""}
      >
        Add
      </button>
      {form.error ? <span className="form-error">{form.error}</span> : ""}
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.shape({
    input: PropTypes.string.isRequired,
    error: PropTypes.string || null
  }),
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
