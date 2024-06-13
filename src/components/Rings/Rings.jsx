import React from 'react';
import "./Rings.css"

const Rings = ({ ringTop, ringLeft, ringRight,children,}) => { 
  const styles = {
    top: ringTop,
    left: ringLeft,
    right: ringRight,
  }
  return (
    
    <> 
      <div style={styles} class="rings">
        <span></span>
        <span></span>
        <span></span>
        {children}
      </div>
    </>
  )
}

export default Rings
