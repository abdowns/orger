import './app.css';

import { useState } from 'react'

import Item from './components/item'
import Button from './components/button'
import NavBar from './components/nav/navbar'

// import GetList, { AddItem } from './TodoList.js'
// import { defaultItem } from './data.js'

function App() {

  const itemProps = {
    title: "new item",
    description: "new description",
  };

  function testCallback(){
    console.log("hello");
  }

  

  const [items, setItems] = useState([itemProps]);
  
  function addItem(){
    setItems([...items, itemProps]);
  }

  return (
    <div className="app">

      <NavBar/>

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
