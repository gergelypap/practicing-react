import { FILTER } from "../constants";
import React from "react";
import "./Filter.css";
import FilterButtonContainer from "../containers/FilterButtonContainer";

const Filter = () => (
  <div className="filter">
    {"Filter: "}
    <FilterButtonContainer type={FILTER.SHOW_ALL}>all</FilterButtonContainer>
    <FilterButtonContainer type={FILTER.SHOW_COMPLETED}>
      completed
    </FilterButtonContainer>
    <FilterButtonContainer type={FILTER.SHOW_PENDING}>
      pending
    </FilterButtonContainer>
  </div>
);

export default Filter;
