import React from "react";
import "./notrevaleur.css";

const objt = [
  {
    name: "Solidarité",
    description:
      "notre ancrage dans l’ESS et la priorité donnée à l’inclusion des plus démunis ne sera jamais remis en cause.",
  },
  {
    name: "Ambition",
    description:
      "l’esprit startup qui nous habite et nous pousse toujours à la prise de risque et à nous dépasser... Sky is the limit!",
  },
  {
    name: "Audace et Innovation",
    description:
      "tous hackers ​dans l’âme, nous savons forcer les verrous et bousculer les systèmes établis pour gagner en efficacité dans notre recherche de l’impact social.",
  },
];

function NotreValeur() {
  return (
    <div>
      <div className="container">
        <h2 className="titre">Nos Valeurs</h2>

        <div className="top">
          {objt.map((element) => (
            <div className="section ">
              <h5 className="titres "> {element.name}</h5>
              <p className="pargraphe ">{element.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotreValeur;
