import React from "react";

export default function LeftTab({ isVisible, moveLeft }) {
  return (
    <div className="left-tab inline-flex">
      {isVisible && <i className="fa fa-chevron-left pointer" onClick={moveLeft}></i>}
    </div>
  );
}
