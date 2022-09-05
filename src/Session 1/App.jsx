import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Hello from './Hello'
import List from './List';
import ParentComponent from './ParentComponent';

const myValue = { value1: "This is an awesome value", value2: "Another awesome value" }

function sum(a, b) {
  return a + b;
}

const num1 = 2;
const num2 = 2;
let array = [1, 2, 3, 4, 5, 6, 7]


function App() {
  return (
    <>
      <Hello />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      <div>
        Hello! Second element here!👋
        <p>Value = {JSON.stringify(myValue)}</p>
        <p>{num1} + {num2} = {sum(num1, num2)}</p>
      </div>

      <MyComponent />
      <List msg="This is a list" array={array} />
      <ParentComponent>
        <a href="https://www.google.com">GOOGLE</a>
      </ParentComponent>
    </>
  );
}

export default App;
