import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./component/Basic1";
import Basic2 from "./component/Basic2";
import BasicUseEffect from "./component/BasicUseEffect";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic2 />
        <BasicUseEffect />
      </header>
    </div>
  );
}

export default App;
