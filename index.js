function TemporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun Facts about React</h1>
      <ul>
        <li> Was first released in 2013</li>
        <li> Was originally created by Jordan Walke</li>
        <li> Has well over 100k stars on GitHub</li>
        <li> Is mantained by Facebook</li>
              <li> Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<TemporaryName />, document.getElementById("root"));
