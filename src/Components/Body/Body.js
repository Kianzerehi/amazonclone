import React, { useState } from "react";
import "./amazon-background.jpg";
import Card from "../Card/Card";
import data from "../../fakeshop";
import BasicModal from "./Product-Modal";

export default function Body() {
  const [cartItems, setCartItems] = useState([]);

  const productSummary = data.map((items, i) => {
    return (
      <div key={i}>
        <Card
          key={items.id}
          {...items}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <BasicModal key={items.idP} {...items} />
      </div>
    );
  });

  return (
    <div>
      <div className="amazon-background">
        <img
          className="amazon-photo"
          src={require("./amazon-background.jpg")}
          alt="amazon background"
        />
      </div>

      <div>
        <section className="product-row">{productSummary}</section>
      </div>
    </div>
  );
}
