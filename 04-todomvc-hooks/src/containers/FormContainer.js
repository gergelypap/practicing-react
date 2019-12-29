import { connect } from "react-redux";
import { changeInput, setFormError } from "../actions/formActions";
import { addTodo } from "../actions/todoActions";
import Form from "../components/Form";

const state = ({ form }) => ({ form });

const actions = dispatch => ({
  onSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.input.value;
    try {
      dispatch(addTodo(input));
    } catch (e) {
      dispatch(setFormError(input, e.message));
      return;
    }
    dispatch(changeInput(""));
  },
  onChange(event) {
    const input = event.target.value;
    dispatch(changeInput(input));
  }
});

export default connect(state, actions)(Form);
