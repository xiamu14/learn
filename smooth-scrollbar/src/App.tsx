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
      setIsScrollX(false);
    }
    if (scrollValues.scrollLeft !== prevScrollValues.scrollLeft) {
      setIsScrollX(true);
      setIsScrollY(false);
    }
  };
  return (
    <div className="App">
      <Scrollbar
        className="content"
        onScroll={handleScroll as any}
      >
        <div className="header">header</div>
        <div className="sidebar">sidebar</div>
        <div className="data">
          datadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadata
        </div>
      </Scrollbar>
      {isScrollY ? (
        <div className="header" style={{ top: "10vh", left: "10vw" }}>
          header
        </div>
      ) : null}
      {isScrollX ? (
        <div className="sidebar" style={{ top: "10vh", left: "10vw" }}>
          sidebar
        </div>
      ) : null}
    </div>
  );
}

export default App;
