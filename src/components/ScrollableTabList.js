import React, { useEffect, useRef, useState } from "react";
import TabItem from "./TabItem";

export default function ScrollableTabList({
  tabs,
  currentTab,
  onSelectTab,
  scrollValue,
  isLeftScroll,
  handleRemoveTab,
}) {
  const scrollRef = useRef(null);

  useEffect(() => {
    moveR(scrollValue);
  }, [scrollValue]);

  const moveR = (scrollValue) => {
    if (isLeftScroll) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 250;
    } else {
      scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + scrollValue;
    }
  };

  const handleScroll = (e) => {
    console.log(e);
  };

  return (
    <div
      className="flex-6 space-even-flex"
      ref={scrollRef}
      onScroll={(e) => {
        handleScroll(e);
      }}
    >
      {tabs &&
        tabs.map((tabData) => {
          return (
            <div key={tabData.id}>
              <TabItem
                data={tabData}
                currentTab={currentTab}
                removeTab={handleRemoveTab}
                handleSelect={onSelectTab}
              />
            </div>
          );
        })}
    </div>
  );
}
