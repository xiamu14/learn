import React from "react";
import { useQuery } from "react-query";
import { testApi } from "./api/test";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { data, error, isLoading } = useQuery(testApi.key, testApi.fetch);
  // const { data, error, isLoading } = useQuery("testApi", () =>
  //   window
  //     .fetch("https://api.jsonapi.co/rest/v1/speech-to-text/news")
  //     .then((res) => res.json())
  // );
  console.log("检查看看网络请求", data);
  if (isLoading) {
    return <div>这里是否需要配合 suspense</div>;
  }
  if (error) {
    return <div>接口报错，显示错误信息提示</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
