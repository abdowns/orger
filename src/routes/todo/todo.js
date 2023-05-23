import { useState, useEffect } from "react";

import Item from "../../components/item";
import Button from "../../components/button";
import Popup from "../../components/popup";

export default function Todo() {
  const itemProps = {
    title: "new item",
    description: "new description",
  };

  const [items, setItems] = useState([itemProps]);
  const [popupState, setPopupState] = useState(false);
  const [name, setName] = useState("");

  var nameChanges = 0;

  // not working
  useEffect(() => {
    nameChanges++;

    if (nameChanges > 1) {
      addItem();
    }
  }, [name]);

  function addItem() {
    togglePopup();

    const newItemProps = {
      title: name,
      description: "New description",
    };

    setItems([...items, newItemProps]);
  }

  function togglePopup() {
    setPopupState(!popupState);
  }

  return (
    <div>
      {popupState && <Popup title={"Note Title"} state={setName} />}

      <Button text={"Add item"} callback={togglePopup} />

      {items.map((props, i) => (
        <Item title={props.title} description={props.description} />
      ))}
    </div>
  );
}
