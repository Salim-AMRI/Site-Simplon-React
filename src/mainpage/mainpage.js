import React from "react";
import Testimonies from "./Testimonies/Testimonies";
import Partners from "./Partners/Partners";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import "./mainpage.css";

/******************************/
import pic1 from "./image/immeuble.jpg";
import pic2 from "./image/microsoft.png";
import pic3 from "./image/total.png";
import pic4 from "./image/Accenture_logo.png";
import pic5 from "./image/fondation-bnpp-1.jpg";
import pic6 from "./image/orange.png";
import Generale from "./General/General";

/******************************/

let partner = [pic1, pic2, pic3, pic4, pic5, pic6];

function MainPage(props) {
  return (
    <div className="mainPage">
      <Generale />
      <Testimonies />
      <Partners pics={partner} />
      <Footer />
    </div>
  );
}
export default MainPage;
