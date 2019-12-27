import { FILTER } from "../constants";
import React from "react";
import "./Filter.css";
import FilterLink from "../containers/FilterLink";

const Filter = () => (
  <div className="filter">
    {"Filter: "}
    <FilterLink type={FILTER.SHOW_ALL}>all</FilterLink>
    <FilterLink type={FILTER.SHOW_COMPLETED}>completed</FilterLink>
    <FilterLink type={FILTER.SHOW_PENDING}>pending</FilterLink>
  </div>
);

export default Filter;
