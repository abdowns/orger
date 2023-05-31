import "./nav.css";

import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";

import NavSection from "./navsection";
import Popup from "../popup";

import { ProjectContext } from "../../routes/app/app";

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
  const [name, setName] = useState("New project");

  const [popupState, setPopupState] = useState(false);

  const [projects, setProjects] = useContext(ProjectContext);

  useEffect(() => {
    if (popupState) {
      addItem();
    }
  }, [name]);

  function addItem() {
    togglePopup();

    const newItem = {
      title: name,
      link: "todo",
      callback: testCallback,
    };

    setItems([...items, newItem]);

    const newColumns = [
      {
        id: 0,
        title: "To-do",
        items: [],
      },
      {
        id: 1,
        title: "Doing",
        items: [],
      },
      {
        id: 2,
        title: "Done",
        items: [],
      },
    ];

    setProjects([...projects, newColumns]);
  }

  function togglePopup() {
    setPopupState(!popupState);
  }

  return (
    <div className="nav">
      {popupState && <Popup title={"Project Title"} state={setName}/>}

      
      <NavSection
        title={"section 1"}
        buttonCallback={togglePopup}
        itemList={items}
      />
    </div>
  );
}
