export const ACTION_SET_FILTER = "ACTION_SET_FILTER";

export const FILTER = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_PENDING: "SHOW_PENDING"
};

/**
 * Action to change the filter.
 */
export const setFilter = filter => ({
  type: ACTION_SET_FILTER,
  filter
});
