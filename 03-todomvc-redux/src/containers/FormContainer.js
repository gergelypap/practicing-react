import { connect } from "react-redux";
import { addTodo, changeInput, setFormError } from "../actions";
import Form from "../components/Form";

const mapStateToProps = ({ form }) => ({ form });

const mapDispatchToProps = dispatch => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
