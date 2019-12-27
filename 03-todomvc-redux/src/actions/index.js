export const ACTION_SET_FILTER = "ACTION_SET_FILTER";
export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export const ACTION_TOGGLE_TODO = "ACTION_TOGGLE_TODO";
export const ACTION_INPUT_CHANGE = "ACTION_INPUT_CHANGE";
export const ACTION_CLEAR_TODOS = "ACTION_CLEAR_TODOS";

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
  type: ACTION_CLEAR_TODOS
});

export const changeInput = value => ({
  type: ACTION_INPUT_CHANGE,
  value
});
