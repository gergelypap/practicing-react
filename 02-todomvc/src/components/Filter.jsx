import React from "react";
import FILTER from "../util/filters";
import FilterLink from "./FilterLink";
import "./Filter.css";

const Filter = ({ active, onChange }) => (
  <div className="filter">
    {"Filter: "}
    <FilterLink active={active} type={FILTER.ALL} handleClick={onChange}>
      all
    </FilterLink>
    <FilterLink active={active} type={FILTER.COMPLETED} handleClick={onChange}>
      completed
    </FilterLink>
    <FilterLink active={active} type={FILTER.PENDING} handleClick={onChange}>
      pending
    </FilterLink>
  </div>
);

export default Filter;
