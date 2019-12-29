import React, { useContext } from "react";
import "./Form.css";
import { addTodo } from "../actions/todoActions";
import Context from "../store/context";
import { changeInput } from "../actions/formActions";

export default function() {
  const [state, dispatch] = useContext(Context);

  function onSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.input.value;
    dispatch(addTodo(input));
    // try {
    //   dispatch(addTodo(input));
    // } catch (e) {
    //   dispatch(setFormError(input, e.message));
    //   return;
    // }
    dispatch(changeInput(""));
  }

  return (
    <form
      className={"form" + (state.error ? " form--has-error" : "")}
      onSubmit={event => onSubmit(event)}
    >
      <input
        type="text"
        name="input"
        value={state.input}
        className="form-input"
        placeholder={"What is your plan?"}
        onChange={event => dispatch(changeInput(event.target.value))}
        autoFocus={true}
        autoComplete="off"
      />
      <button
        type="submit"
        className="form-submit"
        disabled={state.input === ""}
      >
        Add
      </button>
      {state.error ? <span className="form-error">{state.error}</span> : ""}
    </form>
  );
}
