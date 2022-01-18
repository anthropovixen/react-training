function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />
        </nav>
      </header>
      <h1>Reasons why I'm excited to learn React</h1>
      <ul>
        <li> Was first released in 2013</li>
        <li> Was originally created by Jordan Walke</li>
        <li> Has well over 100k stars on GitHub</li>
        <li> Is mantained by Facebook</li>
        <li> Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <footer>
        <small>©2022 Santos development. All rights reserved.</small>{" "}
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
