import { connect } from "react-redux";
import { addTodo, inputChange } from "../actions";
import Form from "../components/Form";

const mapStateToProps = state => {
  return {
    value: state.inputReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: event => {
      event.preventDefault();
      const inputValue = event.target.elements.input.value;
      dispatch(addTodo(inputValue));
      dispatch(inputChange(""));
    },
    onChange: event => {
      const inputValue = event.target.value;
      dispatch(inputChange(inputValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
