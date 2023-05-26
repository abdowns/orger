import { useState, useEffect } from "react";

import Item from "../../components/item";
import Button from "../../components/button";
import Popup from "../../components/popup";

export default function Todo() {
  const itemProps = {
    id: 0,
    title: "new testnew testnew testnew testnew testnew test",
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

  var currentIndex = 1;
  function addItem() {
    togglePopup();

    const newItemProps = {
      id: currentIndex,
      title: name,
      description: "New description",
    };

    setItems([...items, newItemProps]);
    currentIndex++;
  }

  function removeItem(id) {
    // items.forEach((item, i) => {
    //   if (item.id === id) {

    //   }
    // });

    // fix
    setItems(items.filter((item) => item.id !== id));
  }

  function togglePopup() {
    setPopupState(!popupState);
  }

  return (
    <div>
      {popupState && <Popup title={"Note Title"} state={setName} />}

      <Button text={"Add item"} callback={togglePopup} />

      {items.map((props, i) => (
        <Item props={props} callback={removeItem} />
      ))}
    </div>
  );
}
