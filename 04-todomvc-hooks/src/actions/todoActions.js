export const ACTION_ADD_TODO = "Todo/ADD";
export const ACTION_TOGGLE_TODO = "Todo/TOGGLE";
export const ACTION_CLEAR_ALL = "Todo/CLEAR_ALL";
export const ACTION_COMPLETE_ALL = "Todo/COMPLETE_ALL";

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
