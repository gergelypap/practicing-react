import React, { useContext } from "react";
import { addTodo } from "../store/actions/todoActions";
import Context from "../store/context";
import { changeInput, setFormError } from "../store/actions/formActions";
import Form from "../components/Form";

function handleSubmit(event, todos, dispatch) {
  event.preventDefault();
  const input = event.target.elements.input.value;
  if (todos.find(item => item.text === input) === undefined) {
    dispatch(addTodo(input));
    dispatch(changeInput(""));
  } else {
    dispatch(setFormError("You already added this!"));
  }
}

function handleChangeInput(event, dispatch) {
  dispatch(setFormError(null));
  dispatch(changeInput(event.target.value));
}

export default function() {
  const [{ input, error, todos }, dispatch] = useContext(Context);

  return (
    <Form
      input={input}
      error={error}
      handleSubmit={event => handleSubmit(event, todos, dispatch)}
      handleChangeInput={event => handleChangeInput(event, dispatch)}
    />
  );
}
