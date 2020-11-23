import React from "react";
import logosimp from "./logosimp.png";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img className="logo" src={logosimp} alt="logo simplon" width="100px" />
        <div className="links">
          <a href="/acceuil">Acceuil</a>
          <a href="/equipe">Equipe</a>
          <a href="/apropos">Apropos</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
