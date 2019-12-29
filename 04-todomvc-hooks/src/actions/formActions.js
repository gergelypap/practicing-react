export const ACTION_INPUT_CHANGE = "Form/CHANGE_INPUT";
export const ACTION_SET_FORM_ERROR = "Form/SET_ERROR";

export const changeInput = input => ({
  type: ACTION_INPUT_CHANGE,
  input
});

export const setFormError = error => ({
  type: ACTION_SET_FORM_ERROR,
  error
});
