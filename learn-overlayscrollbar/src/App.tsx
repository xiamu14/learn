import React, { useRef, useEffect } from 'react';
import overlayscrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import logo from './logo.svg';
import './App.css';

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (appRef.current) {
      overlayscrollbars(appRef.current, {
        className: "os-theme-block-dark"
      });
    }
  }, []);
  return (
    <div className="App" ref={appRef}>

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
