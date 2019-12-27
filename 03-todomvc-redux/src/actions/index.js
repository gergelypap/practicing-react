export const ACTION_SET_FILTER = "ACTION_SET_FILTER";
export const ACTION_ADD_TODO = "ACTION_ADD_TODO";

export const FILTER = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_PENDING: "SHOW_PENDING"
};

export const setFilter = filter => ({
  type: ACTION_SET_FILTER,
  filter
});

export const addTodo = text => ({
  type: ACTION_ADD_TODO,
  text
});
