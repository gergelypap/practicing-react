import React from "react";

const FilterLink = ({ active, type, handleClick, children }) => (
  <a
    className={[
      "filter-link",
      active === type ? "filter-link--active" : ""
    ].join(" ")}
    href={"/" + type}
    onClick={event => {
      event.preventDefault();
      handleClick(type);
    }}
  >
    {children}
  </a>
);

export default FilterLink;
