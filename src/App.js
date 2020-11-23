import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import Staff from "./Equipe/Staff";
import MainPage from "./mainpage/mainpage";
import Apropos from "./A propos/apropos";
import Navbar from "./Navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/acceuil" component={MainPage} />
        <Route path="/equipe" component={Staff} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
