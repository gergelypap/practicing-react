import React from "react";
import store from "../store";
import { setFilter } from "../actions";

const FilterLink = ({ active, type, children }) => (
  <a
    className={[
      "filter-link",
      active === type ? "filter-link--active" : ""
    ].join(" ")}
    href={"/" + type}
    onClick={event => {
      event.preventDefault();
      store.dispatch(setFilter(type));
    }}
  >
    {children}
  </a>
);

export default FilterLink;
