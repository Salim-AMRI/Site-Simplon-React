import React from "react";
import "./reseau.css";
function Reseau() {
  return (
    <div className="reseau-sociau">
      <div className="link">
        <div className="logo-s">
          <i class="fab fa-linkedin-in" a href="#">
            likedine
          </i>
          <i class="fab fa-instagram" a href=" #">
            Instagram
          </i>
        </div>
        <div className="logo-s">
          <i class="fab fa-facebook" a href=" #">
            Facebook
          </i>
          <i class="fas fa-phone">
            Telephone:
            <br />
            (+216)213154663
          </i>
        </div>
        <div className="logo-s">
          <i class="fab fa-twitter-square" a href="#">
            Twitter
          </i>
          <i class="fas fa-envelope-open-text" a href="#">
            Email:
          </i>
        </div>
      </div>

      <div className="paragraph">
        <p>
          <b>Adresse</b> Le 15, 15 Avenue de Carthage, Tunis, Tunisia{" "}
        </p>
      </div>
    </div>
  );
}

export default Reseau;
