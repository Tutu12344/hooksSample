import React, { useReducer } from "react";
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
import rootReducer from "./reducers/index";
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";
function App() {
  const initialState = {
    reducerMeat: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 25 },
  };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => dispatch({ type: SELL_MEAT })}>
            Sell meat
          </button>
          TodaysMeat:{state.reducerMeat.numOfMeat}
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => dispatch({ type: SELL_VEGETABLE })}>
            Sell Vegetable
          </button>
          TodaysVegetable:{state.reducerVegetable.numOfVegetable}
          {/* <Basic2 />
        <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch />
          <B /> */}
          {/* <BasicReducer /> */}
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
