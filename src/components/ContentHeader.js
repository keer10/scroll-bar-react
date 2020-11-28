import React, { useEffect, useState } from "react";
import AddTab from "./AddTab";
import LeftTab from "./LeftTab";
import RightTab from "./RightTab";
import ScrollableTabList from "./ScrollableTabList";
import TabData from "./TabData";

export default function ContentHeader() {
  const tabs = [
    {
      id: 1,
      content: "Tab1 content",
    },
    {
      id: 2,
      content: "Tab2 content",
    },
    {
      id: 3,
      content: "Tab3 content",
    },
  ];

  const getTabList = () => {
    return tabs;
  };

  const [tabList, setTabsList] = useState(tabs);

  const [currentTab, setCurrentTab] = useState(1);

  const [displayLeft, toggleLeft] = useState(false);

  const [displayRight, toggleRight] = useState(true);

  const [alertMessage, setAlertMessage] = useState("");

  const [tabContent, setTabContent] = useState(tabs[0].content);

  const [scrollVal, setScrollVal] = useState(0);

  const [isLeftScroll, toggleLeftScroll] = useState(false);

  const [isAddTab, toggleAddTab] = useState(false);

  useEffect(() => {
    if (!isAddTab) {
      if (tabList.length > 0) handleSelectTab(tabList[0]);
    } else {
      if (tabList.length > 0) handleSelectTab(tabList[tabList.length - 1]);
    }
  }, [tabList]);

  const handleSelectTab = (tab) => {
    console.log(tab);
    setCurrentTab(tab.id);
    setTabContent(tab.content);

    if (tab.id === tabList[0].id) {
      toggleLeft(false);
    } else if (tab.id === tabList[tabList.length - 1].id) {
      toggleRight(false);
      toggleLeft(true);
    } else {
      toggleRight(true);
      if (tabList.length >= 3) {
        toggleLeft(true);
      }
    }
  };

  const addNewTab = () => {
    if (tabList.length === 10) {
      setAlertMessage("Max limit reached");
      setTimeout(() => {
        setAlertMessage("");
      }, 4000);
      return;
    }

    toggleAddTab(true);

    setTabsList([
      ...tabList,
      {
        id: tabList.length + 1,
        content: "some new tab content",
      },
    ]);

    if (tabList.length >= 3 && currentTab !== 1) {
      toggleLeft(true);
      toggleRight(true);
    } else {
      if (tabList.length >= 1) {
        toggleRight(true);
      }
    }
    setScrollVal(scrollVal + 250);
    handleSelectTab(tabList[tabList.length - 1]);
  };

  const handleMoveLeft = () => {
    console.log("handle move left");
    handleSelectTab(tabList[currentTab - 1 - 1]);
    if (scrollVal > 0) {
      toggleLeftScroll(true);
      setScrollVal(scrollVal - 250);
    }
  };

  const handleMoveRight = () => {
    handleSelectTab(tabList[currentTab - 1 + 1]);
    if (scrollVal < 2000) {
      toggleLeftScroll(false);
      setScrollVal(scrollVal + 250);
    }
  };

  const removeTabFromList = (tabIndex) => {
    const newTablist = tabList.filter((tab) => {
      return tab.id !== tabIndex;
    });

    setTabsList(newTablist);
  };

  return (
    <>
      {alertMessage && <div className="error-message">{alertMessage}</div>}
      <div className="content-header">
        <LeftTab isVisible={displayLeft} moveLeft={handleMoveLeft} />
        <ScrollableTabList
          tabs={tabList}
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
          scrollValue={scrollVal}
          isLeftScroll={isLeftScroll}
          handleRemoveTab={removeTabFromList}
        />
        <RightTab isVisible={displayRight} moveRight={handleMoveRight} />
        <AddTab addItem={addNewTab} />
      </div>

      <TabData content={tabContent} />
    </>
  );
}
