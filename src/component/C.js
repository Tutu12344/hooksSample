import React, { useContext } from "react";
import App from "../App";
import AppContext from "../contexts/AppContext";

const C = () => {
  // reduxのStateみたいなやつ
  const value = useContext(AppContext);
  return (
    <div>
      <h3>C</h3>
      {value}
    </div>
  );
};

export default C;
