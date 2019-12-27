export const ACTION_SET_FILTER = "ACTION_SET_FILTER";
export const ACTION_ADD_TODO = "ACTION_ADD_TODO";
export const ACTION_TOGGLE_TODO = "ACTION_TOGGLE_TODO";

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
