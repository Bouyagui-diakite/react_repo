import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Faq from "./pages/Faq";
import Tarifs from "./pages/Tarifs";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
const App = () => {
  return (
    <div class="container">
      <div>
        <h1>Image d'Entête</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Acceuil />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/tarifs" exact element={<Tarifs />} />
          <Route path="/connexion" exact element={<Connexion />} />
          <Route path="/inscription" exact element={<Inscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
