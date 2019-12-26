import React from "react";
import FILTER from "../util/filters";
import "./Filter.css";
import FilterLink from "./FilterLink";

export default class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        {"Filter: "}
        <FilterLink
          active={this.props.active}
          type={FILTER.ALL}
          handleClick={this.props.onChange}
        >
          all
        </FilterLink>
        <FilterLink
          active={this.props.active}
          type={FILTER.COMPLETED}
          handleClick={this.props.onChange}
        >
          completed
        </FilterLink>
        <FilterLink
          active={this.props.active}
          type={FILTER.PENDING}
          handleClick={this.props.onChange}
        >
          pending
        </FilterLink>
      </div>
    );
  }
}
