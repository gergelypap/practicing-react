import { connect } from "react-redux";
import { addTodo, changeInput } from "../actions";
import Form from "../components/Form";

const mapStateToProps = state => ({
  value: state.inputReducer
});

const mapDispatchToProps = dispatch => ({
  onSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.elements.input.value;
    dispatch(addTodo(inputValue));
    dispatch(changeInput(""));
  },
  onChange(event) {
    const inputValue = event.target.value;
    dispatch(changeInput(inputValue));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
