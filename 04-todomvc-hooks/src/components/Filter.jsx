import React, { memo } from "react";
import "./Filter.css";
import PropTypes from "prop-types";

function Filter({ active, count, handleClick, children }) {
  return (
    <button className="filter" onClick={handleClick} disabled={active}>
      {children} ({count})
    </button>
  );
}

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default memo(Filter, (prevProps, nextProps) => {
  return (
    prevProps.count === nextProps.count && prevProps.active === nextProps.active
  );
});
