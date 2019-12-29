import { FILTER } from "../constants";
import React from "react";
import "./Filters.css";
import FilterContainer from "../containers/FilterContainer";

const Filters = () => (
  <div className="filters">
    {"Filters: "}
    <FilterContainer filter={FILTER.SHOW_ALL}>all</FilterContainer>
    <FilterContainer filter={FILTER.SHOW_COMPLETED}>completed</FilterContainer>
    <FilterContainer filter={FILTER.SHOW_PENDING}>pending</FilterContainer>
  </div>
);

export default Filters;
