import React from "react";
import { setFilter } from "../actions";
import { connect } from "react-redux";

const FilterLink = ({ filter, type, onClick, children }) => (
  <a
    className={[
      "filter-link",
      filter === type ? "filter-link--active" : ""
    ].join(" ")}
    href={"/" + type}
    onClick={onClick}
  >
    {children}
  </a>
);

const mapStateToProps = state => ({
  filter: state.filterReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: event => {
    event.preventDefault();
    dispatch(setFilter(ownProps.type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
