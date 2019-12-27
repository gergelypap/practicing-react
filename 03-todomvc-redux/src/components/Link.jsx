import React from "react";

const Link = ({ active, onClick, children }) => (
  <a
    className={["filter-link", active ? "filter-link--active" : ""].join(" ")}
    href=""
    onClick={onClick}
  >
    {children}
  </a>
);

export default Link;
