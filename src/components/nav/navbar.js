import './nav.css'

import NavSection from './navsection'

export default function NavBar(){
  
  const itemList = [
    {
      title: "test 1",
      callback: testCallback
    },
    {
      title: "test 2",
      callback: testCallback
    },
    {
      title: "test 3",
      callback: testCallback
    }
  ];
  
  return (
    <div className="nav">
      <NavSection title={"section 1"} itemList={itemList}/>
      <NavSection title={"section 2"} itemList={itemList}/>
    </div>
  );
}