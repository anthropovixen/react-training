import React from "react";
import logo512 from "./images/logo512.png"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src={logo512} alt="react logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
