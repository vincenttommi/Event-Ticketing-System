import PropTypes from "prop-types";
import React from "react";
import "./style.css";

function VuesaxLinearBezier ({
  className,
  vuesaxLinearBezier = "https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/vuesax-linear-bezier.svg",
}) {
  return <img className={`vuesax-linear-bezier ${className}`} alt="Vuesax linear bezier" src={vuesaxLinearBezier} />;
};

export default VuesaxLinearBezier;

VuesaxLinearBezier.propTypes = {
  vuesaxLinearBezier: PropTypes.string,
};

