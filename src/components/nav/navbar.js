import "./nav.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import NavSection from "./navsection";

export default function NavBar() {
  function testCallback() {
    console.log("hello");
  }

  const itemList = [
    {
      title: "Todo",
      link: "todo",
      callback: testCallback,
    },
  ];

  const [items, setItems] = useState(itemList);

  function addItem() {
    const newItem = {
      title: "New project",
      link: "todo",
      callback: testCallback,
    };

    setItems([...items, newItem]);
  }

  return (
    <div className="nav">
      <NavSection
        title={"section 1"}
        buttonCallback={addItem}
        itemList={itemList}
      />
    </div>
  );
}
