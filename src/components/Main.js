import React from "react";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li> It's cool!</li>
        <li> Has well over 100k stars on GitHub</li>
        <li> Is mantained by Facebook</li>
        <li> Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
