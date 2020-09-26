import React, { useState, useEffect } from "react";

//UseEffect→読み込んだ最初の一回だけ、Stateが変更された時に使われる
const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  //第二引数に最初に読み込まれた時の初期値を与えられる+変化を感知するstateを与えられる
  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click{count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
    </div>
  );
};

export default BasicUseEffect;
