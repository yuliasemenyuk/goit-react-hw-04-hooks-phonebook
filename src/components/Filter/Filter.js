import React from "react";
import style from "./Filter.module.css";
import propTypes from "prop-types";

const Filter = ({ filter, change }) => (
  <label className={style.filter_lable}>
    Find contact by name
    <input
      className={style.filter_input}
      type="text"
      value={filter}
      onChange={change}
    />
  </label>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  change: propTypes.func.isRequired,
};

export default Filter;