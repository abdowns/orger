import './App.css';

import Item from './components/Item.js'
import GetList, { AddItem } from './TodoList.js'

function App() {
  AddItem("new title", "desc", "placeholder");

  return (
    <div className="App">
      <GetList />
    </div>
  );
}

export default App;
