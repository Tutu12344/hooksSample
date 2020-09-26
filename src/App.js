import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppContext from "./contexts/AppContext";
import B from "./component/B";
// import Basic1 from "./component/Basic1";
// import Basic2 from "./component/Basic2";
// import BasicUseEffect from "./component/BasicUseEffect";
// import TimerContainer from "./component/TimerContainer";
import ApiFetch from "./component/ApiFetch";
import BasicReducer from "./component/BasicReducer";
function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 />
        <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
