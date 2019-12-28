export const ACTION_SET_FILTER = "ACTION_SET_FILTER";
export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export const ACTION_TOGGLE_TODO = "ACTION_TOGGLE_TODO";
export const ACTION_INPUT_CHANGE = "ACTION_INPUT_CHANGE";
export const ACTION_CLEAR_ALL = "ACTION_CLEAR_ALL";
export const ACTION_COMPLETE_ALL = "ACTION_COMPLETE_ALL";
export const ACTION_SET_FORM_ERROR = "ACTION_SET_FORM_ERROR";

export const setFilter = filter => ({
  type: ACTION_SET_FILTER,
  filter
});

export const addTodo = text => ({
  type: ACTION_ADD_TODO,
  text
});

export const toggleTodo = id => ({
  type: ACTION_TOGGLE_TODO,
  id
});

export const clearTodos = () => ({
  type: ACTION_CLEAR_ALL
});

export const completeTodos = () => ({
  type: ACTION_COMPLETE_ALL
});

export const changeInput = input => ({
  type: ACTION_INPUT_CHANGE,
  input
});

export const setFormError = (input, message) => ({
  type: ACTION_SET_FORM_ERROR,
  input,
  message
});
