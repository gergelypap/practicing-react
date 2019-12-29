import React, { useContext } from "react";
import "./Form.css";
import { addTodo } from "../store/actions/todoActions";
import Context from "../store/context";
import { changeInput, setFormError } from "../store/actions/formActions";

export default function() {
  const [state, dispatch] = useContext(Context);

  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.input.value;
    if (state.todos.find(item => item.text === input) === undefined) {
      dispatch(addTodo(input));
      dispatch(changeInput(""));
    } else {
      dispatch(setFormError("You already added this!"));
    }
  }

  function handleChangeInput(event) {
    dispatch(setFormError(null));
    dispatch(changeInput(event.target.value));
  }

  return (
    <form
      className={"form" + (state.error ? " form--has-error" : "")}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="input"
        value={state.input}
        className="form-input"
        placeholder={"What is your plan?"}
        onChange={handleChangeInput}
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
