import React from "react";
import Equipe from "./Equipe";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import "./Equipe.css";
const staff = [
  {
    name: "Mouna Ayari",
    role: "Responsable Simplon.co - Tunisie",
    info: "https://www.linkedin.com/in/mouna-ayari-95296456/",
    image:
      "https://lanature929.files.wordpress.com/2016/04/a617873e-a5b2-4c25-b944-e2c3813580b8_original.jpg",
  },
  {
    name: "Syrine Auguste Amy",
    role: "Chef de Fabrique chez Simplon.co - Tunisie",
    info: "https://www.linkedin.com/in/syrine-auguste-amy-293b5185/",
    image:
      "https://i.pinimg.com/originals/66/15/37/661537b36e4471d709d4b27f19a38cda.jpg",
  },
  {
    name: "Mohamed seifeddine hamza",
    role: "Instructeur chez Simplon.co - Tunisie",
    info: "https://www.linkedin.com/in/mohamed-seifeddine-hamza-640590180/",
    image: "https://www.computerhope.com/jargon/g/geek.jpg",
  },
];

function Staff() {
  return (
    <div className="staff">
      <Equipe staff={staff} />
      <Footer />
    </div>
  );
}

export default Staff;
