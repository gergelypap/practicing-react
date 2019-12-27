import React from "react";
import FilterLink from "./FilterLink";
import "./Filter.css";
import { FILTER } from "../actions";

const Filter = ({ active }) => (
  <div className="filter">
    {"Filter: "}
    <FilterLink active={active} type={FILTER.SHOW_ALL}>
      all
    </FilterLink>
    <FilterLink active={active} type={FILTER.SHOW_COMPLETED}>
      completed
    </FilterLink>
    <FilterLink active={active} type={FILTER.SHOW_PENDING}>
      pending
    </FilterLink>
  </div>
);

export default Filter;
