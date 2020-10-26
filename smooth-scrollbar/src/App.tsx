import React, { useState } from "react";
import Scrollbar from "react-scrollbars-custom";
import "./App.scss";
import { ScrollState } from "react-scrollbars-custom/dist/types/types";

function App() {
  const [isScrollX, setIsScrollX] = useState(false);
  const [isScrollY, setIsScrollY] = useState(false);

  const handleScroll = (
    scrollValues: ScrollState,
    prevScrollValues: ScrollState
  ) => {
    if (scrollValues.scrollTop !== prevScrollValues.scrollTop) {
      setIsScrollY(true);
      if (scrollValues.scrollLeft === 0) {
        setIsScrollX(false);
      }
    }
    if (scrollValues.scrollLeft !== prevScrollValues.scrollLeft) {
      setIsScrollX(true);
      if (scrollValues.scrollTop === 0) {
        setIsScrollY(false);
      }
    }
  };
  return (
    <div className="App">
      <Scrollbar className="content" onScroll={handleScroll as any}>
        <div className="header">
          <div className="common_area"></div>
        </div>
        <div className="sidebar">
          <div className="common_area"></div>
        </div>
        <div className="data">
          datadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadata
        </div>
      </Scrollbar>
      {isScrollY ? (
        <div className="header" style={{ top: "0", left: "0", zIndex: 102 }}>
          <div className="common_area"></div>
        </div>
      ) : null}
      {isScrollX ? (
        <div className="sidebar" style={{ top: "0", left: "0", zIndex: 102 }}>
          <div className="common_area"></div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
