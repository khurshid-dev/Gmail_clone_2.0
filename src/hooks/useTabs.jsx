import React, { useState } from "react";

export const useTabs = (initialTabs, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  const [currTab, setCurrTab] = useState(initialTabs);
  return {
    currentItem: allTabs[currTab],
    changeItem: setCurrTab,
  };
};

// const { changeItem, currentItem } = useTabs(0, content);

//  <div>
//      {content.map((section, index) => (
//          <button onClick={() => changeItem(index)}>{section.tab}</button>
//      ))}
//  </div>
//  <div>{currentItem.content}</div>

// const content = [
//     {
//       tab: "Раздел 1",
//       content: "Здесь передается контент для раздела 1",
//     },
//     {
//       tab: "Раздел 2",
//       content: "Здесь передается контент для раздела 2",
//     },
//   ];
