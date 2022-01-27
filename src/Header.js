import React from "react";
import logo512 from "./images/logo512.png";

export default function Header() {
  return (
    <nav>
      <img className="nav--logo" src={logo512} alt="react logo" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
