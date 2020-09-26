import React from "react";

const basic1 = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default basic1;
