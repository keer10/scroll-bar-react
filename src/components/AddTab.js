import React from "react";

export default function AddTab({ addItem }) {
  return (
    <div className="add-button inline-flex">
      <i className="fa fa-plus pointer" onClick={addItem}></i>
    </div>
  );
}
