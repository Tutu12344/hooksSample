import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Basic1 from "./component/Basic1";
// import Basic2 from "./component/Basic2";
// import BasicUseEffect from "./component/BasicUseEffect";
// import TimerContainer from "./component/TimerContainer";
import ApiFetch from "./component/ApiFetch";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 />
        <BasicUseEffect /> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
