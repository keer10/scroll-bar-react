import React from "react";

export default function RightTab( { isVisible, moveRight}) {
  return (
    <div className="right-tab inline-flex">
      {isVisible && <i className="fa fa-chevron-right pointer" onClick={moveRight}></i>}
    </div>
  );
}
