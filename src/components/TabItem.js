import React from "react";

export default function TabItem({ data, currentTab, removeTab, handleSelect }) {
  return (
    <div
      className="tab-item"
      style={
        currentTab === data.id ? { borderBottom: "2px solid blue" } : undefined
      }
    >
      <div className="tab-name" onClick={() => handleSelect(data)}>
        Tab {data.id}
      </div>
      <div className="close-tab">
        <i
          className="fa fa-times"
          style={{ margin: "0 10px" }}
          aria-hidden="true"
          onClick={() => {
              removeTab(data.id)}}
        ></i>
      </div>
    </div>
  );
}
