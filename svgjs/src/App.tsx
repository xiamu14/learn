import React from "react";

import "./App.css";
import TimeCoverage from "./time_coverage";

const App: React.FC = () => {
  return (
    <div className="App">
      <TimeCoverage />
      <h1>测试 styled-jsx</h1>
      <style jsx>
        {`
          h1 {
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default App;
