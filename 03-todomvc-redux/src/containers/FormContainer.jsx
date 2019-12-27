import { connect } from "react-redux";
import { addTodo } from "../actions";
import Form from "../components/Form";

const mapStateToProps = ({ value }) => ({ value });

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: event => {
      event.preventDefault();
      const input = event.target.elements.input;
      dispatch(addTodo(input.value));
      input.value = "";
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
