import React from "react";
import { setFilter } from "../actions";
import { connect } from "react-redux";

const FilterLink = ({ active, type, onClick, children }) => (
  <a
    className={[
      "filter-link",
      active === type ? "filter-link--active" : ""
    ].join(" ")}
    href={"/" + type}
    onClick={onClick}
  >
    {children}
  </a>
);

const mapStateToProps = state => ({
  active: state.filterReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: event => {
    event.preventDefault();
    dispatch(setFilter(ownProps.type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
