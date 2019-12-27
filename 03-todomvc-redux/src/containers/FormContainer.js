import { connect } from "react-redux";
import { addTodo, changeInput } from "../actions";
import Form from "../components/Form";

const mapStateToProps = ({ input }) => ({ input });

const mapDispatchToProps = dispatch => ({
  onSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.input.value;
    dispatch(addTodo(input));
    dispatch(changeInput(""));
  },
  onChange(event) {
    const input = event.target.value;
    dispatch(changeInput(input));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
