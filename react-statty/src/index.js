// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from "react";
import { render } from "react-dom";
import { Provider, State } from "statty";
import inspect from "statty/inspect";

// selector is a function that returns a slice of the state
// if not specified it defaults to f => f
const selector = state => ({ count: state.count });

// updaters

// updaters MUST be pure and return a complete new state,
// like Redux reducers
const onDecrement = state =>
  Object.assign({}, state, { count: state.count - 1 });

const onIncrement = state =>
  Object.assign({}, state, { count: state.count + 1 });

// Counter uses a <State> component to access the state
// and the update function used to execute state mutations
const Counter = () => (
  <State
    select={selector}
    render={({ count }, update) => (
      <div>
        <span>Clicked: {count} times </span>
        <button onClick={() => update(onIncrement)}>+</button>{" "}
        <button onClick={() => update(onDecrement)}>-</button>{" "}
      </div>
    )}
  />
);

// initial state
const initialState = {
  count: 0
};

// The <Provider> component is supposed to be placed at the top
// of your application. It accepts the initial state and an inspect function
// useful to log state mutatations during development
// (check your dev tools to see it in action)
const App = () => (
  <Provider state={initialState} inspect={inspect}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
