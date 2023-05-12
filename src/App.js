import './App.css';

import { useState } from 'react'

import Item from './components/Item.js'
import Button from './components/Button.js'
import GetList, { AddItem } from './TodoList.js'
import { defaultItem } from './data.js'

export const [items, setItems] = useState([defaultItem]);

function App() {

  // const [items, setItems] = useState(["sample item"]);
  
  function addItem(){
    const itemProps = {
      title: "new item",
      description: "new description",
    };
    
    setItems([...items, itemProps]);
  }

  //  <GetList />

  return (
    <div className="App">
      <Button text={"Add item"} callback={addItem} />
  
      {items.map((props, i) => (
        <Item title={props.title} description={props.description}/>)
      )}
    </div>
  );
}

export default App;
