import './App.css';

import { useState } from 'react'

import Item from './components/Item'
import Button from './components/Button'
import NavSection from './components/NavSection';
import GetList, { AddItem } from './TodoList.js'
import { defaultItem } from './data.js'

function App() {

  const itemProps = {
    title: "new item",
    description: "new description",
  };

  const [items, setItems] = useState([itemProps]);
  
  function addItem(){
    setItems([...items, itemProps]);
  }

  return (
    <div className="app">

      <div className="nav">
        <NavSection title={"section 1"}/>
        <NavSection title={"section 2"}/>
      </div>

      <div className="content">
        <Button text={"Add item"} callback={addItem} />
        
        {items.map((props, i) => (
          <Item title={props.title} description={props.description}/>)
        )}
      </div>

      
    </div>
  );
}

export default App;
