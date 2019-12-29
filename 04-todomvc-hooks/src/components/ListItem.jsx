import React, { memo } from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

function ListItem({ text, done, onClick }) {
  return (
    <span
      className={"list-item" + (done ? " list-item--done" : "")}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default memo(ListItem, (prevProps, nextProps) => {
  return prevProps.done === nextProps.done && prevProps.text === nextProps.text;
});
