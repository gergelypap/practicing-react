import { setFilter } from "../actions";
import { connect } from "react-redux";
import "../components/Filter.css";
import Link from "../components/Link";

const mapStateToProps = ({ filterReducer }, { type }) => ({
  active: type === filterReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: event => {
    event.preventDefault();
    dispatch(setFilter(ownProps.type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
