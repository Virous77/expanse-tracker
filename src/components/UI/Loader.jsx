import React from "react";
import { ImSpinner9 } from "react-icons/im";
import "./Loader.css";

const Loader = () => {
  return (
    <span className="spinner">
      <ImSpinner9 className="spinnerIcon" />
    </span>
  );
};

export default Loader;
