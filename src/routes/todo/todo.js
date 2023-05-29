import "./todo.css"

import { useState, useEffect } from "react";

import Column from "./column";
import Item from "../../components/item";
import Button from "../../components/button";
import Popup from "../../components/popup";

export default function Todo() {
  // const itemProps = {
  //   id: 0,
  //   title: "new testnew testnew testnew testnew testnew test",
  //   description: "new description",
  // };

  const defaultColumns = [
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

  // const [items, setItems] = useState([itemProps]);
  const [name, setName] = useState("New note"); // make this accesible to all columns

  const [columns, setColumns] = useState(defaultColumns);
  const [currentColumn, setCurrentColumn] = useState(0);

  const [popupState, setPopupState] = useState(false);

  useEffect(() => {
    if (popupState) {
      addItem();
    }
  }, [name]);

  function addItem() {
    togglePopup();

    const newId = createId();
    const newItemProps = {
      id: newId,
      title: name,
      description: "New description",
    };

    setColumns(
      columns.map((column) =>
        column.id === currentColumn
        ? {
            ...column,
            items: [...column.items, newItemProps],
          }
        : {...column}
      )
    );
  }

  // make list of columns
  // each with own index
  // iterate through each column and instantiate
  // pass the index into each column with the column props
  // pass own index into popupcallback
  // make state that tracks current column
  // add to that column in addItem

  function removeItem(id) {
    // Find the item's column; need to store this in a temporary variable.
    // > if you just setCurrentColumn, the value would not be updated in time
    //   for the `columns.map((column) => column.id === currentColumn)`, therefore
    //   a temporary variable `targetColumn` is required.
    let targetColumn = columns.find(col => col.items.find(it => it.id === id) !== undefined).id;
    setCurrentColumn(targetColumn);

    setColumns(
      columns.map((column) =>
        column.id === targetColumn
        ? {
            ...column,
            items: column.items.filter((item) => item.id !== id)
          }
        : {...column}
      )
    )
  }

  function togglePopup(columnId) {
    setCurrentColumn(columnId);
    setPopupState(!popupState);
  }

  return (
    <div>
      {popupState && <Popup title={"Note Title"} state={setName} />}

      <div className="column-container">

        {columns.map((props, i) => (
          <Column
            key={i}
            props={props}
            popupCallback={togglePopup}
            buttonCallback={removeItem}
          />
        ))}
        
      </div>

      
    </div>
  );
}

export function createId() {
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000);

  return parseInt(timestamp.substr(-9) + random);
}