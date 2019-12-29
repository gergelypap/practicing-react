import React from "react";
import "./Filter.css";

export default function({ active, count, children, onClick }) {
  return (
    <button className="filter" onClick={onClick} disabled={active}>
      {children} ({count})
    </button>
  );
}
