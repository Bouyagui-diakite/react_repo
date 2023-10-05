import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css";
const Navigation = () => {
  return (
    <div class="text-white div1">
      <nav className="navigation">
        <ul className="uli">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="li1">Accueil</li>
          </NavLink>
          <div class="dropdown">
            <a
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuLink1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Etats civils
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
              <li>
                <a class="dropdown-item" href="#">
                  Actes de Naissance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Actes de Mariage
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Actes de décès
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Certification de Documement
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Légalisation de Signature
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuLink1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Actes de Justice
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
              <li>
                <a class="dropdown-item" href="#">
                  Certificats de Nationalité
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Casiers Judiciaires
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
            </ul>
          </div>
          <NavLink
            to="/faq"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="li1">FAQ</li>
          </NavLink>
          <NavLink
            to="/tarifs"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="li1">Tarifs</li>
          </NavLink>
          <div class="dropdown">
            <a
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuLink3"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faUser} /> Connexion
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
              <li>
                <a class="dropdown-item" href="#">
                  <NavLink to="/connexion">Connexion</NavLink>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <NavLink to="/inscription">Inscription</NavLink>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
