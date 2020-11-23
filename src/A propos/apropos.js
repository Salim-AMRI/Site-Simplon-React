import React from "react";
import Vision from "./notre_vision/notre_vision";
import Valeur from "../Nos Valeur/notrevaleur";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import "./apropos.css";

function Apropos() {
  return (
    <div className="apropos-page">
      <div>
        <Vision />
        <Valeur />
      </div>
      <Footer />
    </div>
  );
}
export default Apropos;
