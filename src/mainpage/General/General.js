import React from "react";
import "./General.css";
import Info from "./images/InfoPic.png";
import Impact from "./images/Impact.png";
import Courbe from "./images/Courbe.png";

function Generale() {
  return (
    <div className="General-info">
      <div className="info">
        <h2>Qui Somme Nous...</h2>
        <p>
          Simplon est un organisme de formation labellisée French Tech, La
          France s’Engage, Ashoka, EPIC et constituant le plus grand et le plus
          inclusif des réseaux de la « Grande École du Numérique », offrant des
          formations gratuites et intensives aux métiers en tension du numérique
          pour des personnes talentueuses mais éloignées de l’emploi ou situées
          dans des territoires fragiles
        </p>
        <img src={Info} alt="" />
      </div>
      <center>
        <h2>Notre Impact</h2>
      </center>
      <div className="impact">
        <img src={Courbe} alt="" />
        <img src={Impact} alt="" />
      </div>
    </div>
  );
}
export default Generale;
