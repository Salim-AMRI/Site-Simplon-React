import React from "react";
import Form from "./Form";
import Map from "../Map/Map";
import Reseau from "../Reseau sociaux/reseau";
import Footer from "../Footer/Footer";
import "./Contact.css";
import Navbar from "../Navbar/navbar";

function Contact() {
  return (
    <div className="Contact-page">
      <div className="Contact">
        <Form />
        <div className="socials">
          <Reseau />
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
