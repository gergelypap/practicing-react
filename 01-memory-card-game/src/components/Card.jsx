import React from "react";
import classnames from "classnames";
import "./Card.css";

export default function Card(props) {
  const classes = classnames("Card", {
    "Card--active": props.isActive(props.face),
    "Card--found": props.isFound(props.face),
    "Card--mismatch": props.isMismatch(props.face)
  });
  return (
    <button
      className={classes}
      onClick={props.onClick}
      disabled={props.isDisabled(props.face)}
    >
      <span className="Card__face">{props.face}</span>
    </button>
  );
}
