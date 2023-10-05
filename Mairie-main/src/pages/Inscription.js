import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "../styles/Connexion.css";
import Etape1 from "../components/Etape1";
import Etape2 from "../components/Etape2";
import Etape3 from "../components/Etape3";

const Inscription = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    nom: "",
    prenom: "",
    login: "",
    mdp: "",
    genre: "",
    profession: "",
    datenaiss: "",
    telephone: "",
  });
  const PageDisplay = () => {
    if (page === 0) {
      return <Etape1 />;
    } else if (page === 1) {
      return <Etape2 />;
    } else {
      return <Etape3 />;
    }
  };
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  return (
    <div>
      <Navigation />
      <div class="divlogin">
        <h1 class="h1prem">
          INSCRIPTION <hr class="hrTitre" />
        </h1>
        <div class="stepDiv">
          <button
            id="btn1"
            class="step1 btfocus"
            onClick={() => {
              setPage((currPage, style) => (currPage = 0));
              btn1.style.background = "grey";
              btn2.style.background = "white";
              btn3.style.background = "white";
            }}
          >
            Etape 1
          </button>
          <button
            id="btn2"
            class="step2 btfocus"
            onClick={() => {
              setPage((currPage) => (currPage = 1));
              btn2.style.background = "grey";
              btn1.style.background = "white";
              btn3.style.background = "white";
            }}
          >
            Etape 2
          </button>
          <button
            id="btn3"
            class="step3 btfocus"
            onClick={() => {
              setPage((currPage) => (currPage = 2));
              btn3.style.background = "grey";
              btn2.style.background = "white";
              btn1.style.background = "white";
            }}
          >
            Etape 3
          </button>
        </div>
        <div class="contenu">{PageDisplay()}</div>
        <div class="stepDiv2">
          <button
            class="btnDiv2"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Précédent
          </button>
          <button
            class="btnDiv2 suiv"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                /*alert("FORM SUBMITTED");
                console.log(formData);
               */
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "S'inscrire" : "Suivant"}
          </button>
          <span>
            <a href="/connexion" class="link1 already">
              j'ai déja un compte
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
