import React from "react";
import "../styles/Etape.css";
const Etape3 = () => {
  return (
    <div>
      <h1 class="titreEtape">Informations de connexion:</h1>
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
          <div class="form">
            <input
              type="password"
              id="confpassword"
              name="confpassword"
              class="form__input"
              autoComplete="off"
              placeholder=" "
            />
            <label for="confpassword" class="form__label">
              Confirmé le mot de passe:
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Etape3;
