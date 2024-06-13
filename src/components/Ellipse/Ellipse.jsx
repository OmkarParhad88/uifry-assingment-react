import React from "react";
import "./Ellipse.css"

const Ellipse = ({ ellipseTop, ellipseLeft, ellipseRight, ellipseRotate }) => {
  
  const styles = {
   top: ellipseTop,
    left: ellipseLeft,
    right: ellipseRight,
    transform: `rotate(${ellipseRotate})`,
  };
  return (
   <>
      <div style={styles} class="ellipse">
     <span></span>
     <span></span>
    </div>
   </>
  );
};

export default Ellipse;
