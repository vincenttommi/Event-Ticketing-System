
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function Component  ({ className, text = "1" })  {
  return (
    <div className={`component ${className}`}>
      <div className="group">
        <div className="overlap-group">
          <div className="element">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Component;

Component.propTypes = {
  text: PropTypes.string,
};
