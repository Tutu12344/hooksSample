import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./component/basic1";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic1 name="hook" />
      </header>
    </div>
  );
}

export default App;
