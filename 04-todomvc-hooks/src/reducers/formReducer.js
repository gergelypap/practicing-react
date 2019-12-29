import {
  ACTION_INPUT_CHANGE,
  ACTION_SET_FORM_ERROR
} from "../actions/formActions";

export default function(state, action) {
  if (action.type === ACTION_INPUT_CHANGE) {
    return { input: action.input, error: null };
  }
  if (action.type === ACTION_SET_FORM_ERROR) {
    return { input: action.input, error: action.message };
  }
  return state;
}
