import React from "react";

export default class FilterLink extends React.Component {
  handleClick(event, selected) {
    event.preventDefault();
    this.props.handleClick(selected);
  }
  render() {
    return (
      <a
        className={[
          "filter-link",
          this.props.active === this.props.type ? "filter-link--active" : ""
        ].join(" ")}
        href={"/" + this.props.type}
        onClick={e => this.handleClick(e, this.props.type)}
      >
        {this.props.children}
      </a>
    );
  }
}
