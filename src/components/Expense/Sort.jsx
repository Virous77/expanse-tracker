import React from "react";
import "./Sort.css";

const Sort = ({ title, handleChange }) => {
  return (
    <header className="sort-main">
      <div className="left-sort">
        <h2>{title}</h2>
      </div>

      <div className="right-sort">
        <select onChange={handleChange}>
          <option value="null">Select</option>
          <option value="asc">Ascending</option>
          <option value="des">Descending</option>
          <option value="5">Last 5 Days</option>
          <option value="10">Last 10 Days</option>
        </select>
      </div>
    </header>
  );
};

export default Sort;
