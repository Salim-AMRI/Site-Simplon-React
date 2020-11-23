import React from "react";
import "./Footer.css";

function Cont() {
  return (
    <div className="contact">
      <div className="espace">Téléphone : <br/> +216 55 077 406</div>
      <div>Mail : exmpl@gmail.com</div>
      <div>
        Addresse : Le15,
        <br /> 15 Avenue De Carthage, <br />
        Tunis 1001
      </div>
    </div>
  );
}

function Follow() {
  return (
    <div className="suivre">
      <div className="espace">Horaires d'ouverture :</div>
      <div> de lundi à vendredi </div>
      <div> de 9h à 17h</div>
      <div>
        <a href="#">
          <img id="logo" src="/images/logo.png" alt="simplon" />
        </a>
      </div>
    </div>
  );
}

function Letter() {
  return (
    <div className="news">
      <form>
        <p>Inscrivez-vous à la Newsletter :</p>
        <input type="text" placeholder="exmpl@gmail.com" />
        <button id="btn">Envoyer</button>

        <p>Nous suivre :</p>
        <div>
          <a href="https://www.facebook.com/SimplonTunis/">
            <img id="fb" src="/images/FB.png" alt="facebook" />
          </a>
          <a href="https://www.youtube.com/channel/UCTFYd2sOfjrJH1C421UyYuQ">
            <img src="/images/YT.png" alt="youtube" />
          </a>
        </div>
      </form>
    </div>
  );
}

function Foot() {
  return (
    <footer>
      <Cont />
      <Follow />
      <Letter />
    </footer>
  );
}

export default Foot;
