import { useState, useEffect } from "react";

import Item from "../../components/item";
import Button from "../../components/button";
import Popup from "../../components/popup";

export default function Todo() {
  const itemProps = {
    id: 0,
    title: "new test",
    description: "new description",
  };

  const [items, setItems] = useState([itemProps]);
  const [popupState, setPopupState] = useState(false);
  const [name, setName] = useState("New note");

  useEffect(() => {
    if (popupState) {
      addItem();
    }
  }, [name]);

  function addItem() {
    togglePopup();

    const newItemProps = {
      id: items.length,
      title: name,
      description: "New description",
    };

    setItems([...items, newItemProps]);
  }

  function removeItem() {

  }

  function togglePopup() {
    setPopupState(!popupState);
  }

  return (
    <div>
      {popupState && <Popup title={"Note Title"} state={setName} />}

      <Button text={"Add item"} callback={togglePopup} />

      {items.map((props, i) => (
        <Item 
          title={props.title} 
          description={props.description} 
          callback={removeItem}
        />
      ))}
    </div>
  );
}
