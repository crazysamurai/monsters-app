import React from "react";
import "./searchbox.css";

const Searchbox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
export default Searchbox;
//functional component is used just to render some html instead of class
