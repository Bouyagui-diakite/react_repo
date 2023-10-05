import React from "react";
import "../styles/Etape.css";
const Etape1 = () => {
  return (
    <div>
      <h1 class="titreEtape">Informations Personnelles:</h1>
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
              Nom:
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
              Prénom:
            </label>
          </div>
          <div class="form">
            <input
              type="date"
              id="password"
              name="password"
              class="form__input"
              autoComplete="off"
              placeholder=" "
            />
            <label for="password" class="form__label">
              Date naissance:
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Etape1;
