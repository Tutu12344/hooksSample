import React, { useState } from "react";

const Basic1 = (props) => {
  //   const clickHandler = () => {
  //     console.log("clicked");
  //   };

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{props.name}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count{count}
      </button>
      {console.log(setCount)}
    </div>
  );
};

export default Basic1;
