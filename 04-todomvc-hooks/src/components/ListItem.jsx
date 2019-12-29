import React from "react";
import "./ListItem.css";
import PropTypes from "prop-types";

const ListItem = ({ item, onClick }) => {
  return (
    <span
      className={"list-item" + (item.done ? " list-item--done" : "")}
      onClick={() => onClick(item.id)}
    >
      {item.text}
    </span>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    done: PropTypes.bool
  }),
  onClick: PropTypes.func.isRequired
};

export default ListItem;
