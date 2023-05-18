import { useState } from 'react';

import Item from '../components/item';
import Button from '../components/button'

export default function Todo(){
  const itemProps = {
    title: "new item",
    description: "new description",
  };

  const [items, setItems] = useState([itemProps]);

  function addItem() {
    setItems([...items, itemProps]);
  }
  
  return (
    <div>
      <Button text={"Add item"} callback={addItem} />

      {items.map((props, i) => (
        <Item title={props.title} description={props.description} />)
      )}
    </div>
  );
}