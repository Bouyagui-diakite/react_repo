import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Userlist from "./Pages/Userlist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Coup-de-coeur" element={<Userlist />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
