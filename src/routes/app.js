import './app.css';

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Item from '../components/item'
import Button from '../components/button'
import NavBar from '../components/nav/navbar'

function App() {
  return (
    <div className="app">

      <NavBar/>

      <Outlet/>

    </div>
  );
}

export default App;
