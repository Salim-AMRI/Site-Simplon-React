import React from "react";
import "./notre_vision.css";

function Vision() {
  return (
    <div className="vision-mission">
      <div className="apropos">
        <h2>A propos...</h2>
        <p>
          Simplon est un réseau de fabriques numériques et inclusives en France
          et à l’étranger.
        </p>
        <p>
          Simplon a formé gratuitement plus de 6 200 apprenants depuis 2013 dont
          près de 40% de femmes et 50% de jeunes peu ou pas diplômées.
        </p>
      </div>
      <div className="mission">
        <div className="mission-paragraph">
          <h3>Notre mission</h3>
          <p>
            Simplon.co est une entreprise sociale qui propose des formations
            présentielles gratuites aux métiers techniques du numérique en forte
            tension et ce en priorité aux profils sous-représentés dans le
            métiers TIC (jeunes peu ou pas diplômés, demandeurs d'emploi,
            réfugiés) avec un objectif de parité femmes - hommes.
          </p>
        </div>
        <div className="Video">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MPC3gZWyxeo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <p>
              <b>Erwan Kezzar</b>
              <em> (co-fondateur)</em> vous explique Simplon.co, avec également
              des témoignages de Simplonien.ne.s
            </p>
          </div>
        </div>
      </div>
      <div className="vision">
        <div className="Video">
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/0PeqnLq12V8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div>
            <p>
              <b>Chez Simplon</b>, nous faisons de la pédagogie active, le plus
              efficace pour rendre les apprenant·e·s compétent·e·s en situation
              de travail.
            </p>
          </div>
        </div>
        <div className="vision-paragraph">
          <h3>Notre vision</h3>
          <p>
            Former des demandeurs d’emploi au métier de Développement web &
            mobile et contribuer ainsi au développement d’un capital humain
            qualifié et l’inclusion d’un public éloigné de l’emploi dans la vie
            professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Vision;
