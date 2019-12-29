import { FILTER } from "../constants";
import React from "react";
import "./Filters.css";
import Filter from "./Filter";

export default () => (
  <div className="filters">
    {"Filters: "}
    <Filter filter={FILTER.SHOW_ALL}>all</Filter>
    <Filter filter={FILTER.SHOW_COMPLETED}>completed</Filter>
    <Filter filter={FILTER.SHOW_PENDING}>pending</Filter>
  </div>
);
