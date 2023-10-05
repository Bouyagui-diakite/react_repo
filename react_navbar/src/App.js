import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import './styles/styles1.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path='/' exact element = {<Home/>} />
      </Routes>
      
      </BrowserRouter>
     <Sidebar/>
    </div>
  );
}

export default App;
