import React from "react";
import FilterLink from "./FilterLink";
import "./Filter.css";
import { FILTER } from "../actions";

const Filter = ({ active, onChange }) => (
  <div className="filter">
    {"Filter: "}
    <FilterLink active={active} type={FILTER.SHOW_ALL} handleClick={onChange}>
      all
    </FilterLink>
    <FilterLink
      active={active}
      type={FILTER.SHOW_COMPLETED}
      handleClick={onChange}
    >
      completed
    </FilterLink>
    <FilterLink
      active={active}
      type={FILTER.SHOW_PENDING}
      handleClick={onChange}
    >
      pending
    </FilterLink>
  </div>
);

export default Filter;
