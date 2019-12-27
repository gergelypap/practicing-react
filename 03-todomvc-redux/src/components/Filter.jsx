import React from "react";
import FilterLink from "./FilterLink";
import { FILTER } from "../actions";
import "./Filter.css";

const Filter = () => (
  <div className="filter">
    {"Filter: "}
    <FilterLink type={FILTER.SHOW_ALL}>all</FilterLink>
    <FilterLink type={FILTER.SHOW_COMPLETED}>completed</FilterLink>
    <FilterLink type={FILTER.SHOW_PENDING}>pending</FilterLink>
  </div>
);

export default Filter;
