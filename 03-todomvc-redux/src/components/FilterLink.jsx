import React from "react";
import store from "../store";

const FilterLink = ({ active, type, children }) => (
  <a
    className={[
      "filter-link",
      active === type ? "filter-link--active" : ""
    ].join(" ")}
    href={"/" + type}
    onClick={event => {
      event.preventDefault();
      store.dispatch({
        type: type
      });
    }}
  >
    {children}
  </a>
);

export default FilterLink;
