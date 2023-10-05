import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Connexion.css";
const Connexion = () => {
  return (
    <div>
      <Navigation />
      <div class="divlogin">
        <h1 class="h1prem">
          CONNEXION <hr class="hrTitre" />
        </h1>
        <form action="">
          <div class="fistinform">
            <div class="form">
              <input
                type="text"
                id="login"
                name="login"
                class="form__input"
                autoComplete="off"
                placeholder=" "
              />
              <label for="login" class="form__label">
                Identifiant:
              </label>
            </div>
            <div class="form">
              <input
                type="password"
                id="password"
                name="password"
                class="form__input"
                autoComplete="off"
                placeholder=" "
              />
              <label for="password" class="form__label">
                Mot de passe:
              </label>
            </div>
          </div>
          <div class="sousForm">
            <button class="btnconnect" type="button">
              Connexion
            </button>
            <a href="/inscription" class="link1 pe-3 ps-3">
              S'inscrire
            </a>
            <a href="#" class="link1">
              Mot de passe oublié?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
