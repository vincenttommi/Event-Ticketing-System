
import PropTypes from "prop-types";
import React from "react";
import { VuesaxLinearBezier } from "/Users/bethwel/phase-05/Event-Ticketing-System/Client/src/Components/Component/VuesaxLinearBezier/VuesaxLinearBezier.js";
import "./style.css";

function Frame ({ className, visible = true, bezierClassName, text = "Bezier" })  {
  return (
    <div className={`frame ${className}`}>
      {visible && (
        <VuesaxLinearBezier
          className="vuesax-linear-bezier-instance"
          vuesaxLinearBezier="https://generation-sessions.s3.amazonaws.com/beef3f925efc20c8defcebc3ff4588b4/img/vuesax-linear-bezier-1.svg"
        />
      )}

      <div className={`bezier ${bezierClassName}`}>{text}</div>
    </div>
  );
};

export default Frame;

Frame.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string,
};
