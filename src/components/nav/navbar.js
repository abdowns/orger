import './nav.css'

import { Link } from 'react-router-dom'

import NavSection from './navsection'

export default function NavBar(){

  function testCallback(){
    console.log("hello");
  }
  
  const itemList = [
    {
      title: "todo",
      link: "/todo",
      callback: testCallback
    },
  ];
  
  return (
    <div className="nav">
      <NavSection title={"section 1"} itemList={itemList}/>
    </div>
  );
}