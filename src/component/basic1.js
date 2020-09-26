import React, { useState } from "react";

const Basic1 = () => {
  const [product, setProducts] = useState({ name: "", price: "" });
  return (
    <div>
      <form>
        {/* ...をつけることでobjectの中身を分解して展開し、nameだけの値を変えることができる（これをおこわないとpriceが失われてしまう） */}
        <input
          type="text"
          value={product.name}
          onChange={(event) =>
            setProducts({ ...product, name: event.target.value })
          }
        />
        <input
          type="text"
          value={product.price}
          onChange={(event) =>
            setProducts({ ...product, price: event.target.value })
          }
        />
      </form>
      {console.log(product.name)}
      {console.log("aaa" + product.price)}
    </div>
  );
};

export default Basic1;
