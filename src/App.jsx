function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "50px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="John Doe"
        style={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
        }}
      />

      <h1>John Doe</h1>
      <h3>Full Stack Developer</h3>

      <p>
        Passionate developer with experience building modern web applications,
        APIs, and cloud solutions. I enjoy creating clean, efficient, and
        user-friendly software.
      </p>

      <hr />

      <h2>About Me</h2>
      <p>
        I have over 5 years of experience working with JavaScript, React,
        Node.js, and cloud technologies. I love solving problems and learning
        new tools.
      </p>

      <h2>Projects</h2>

      <div style={{ textAlign: "left" }}>
        <h3>Task Manager App</h3>
        <p>A web application for organizing daily tasks and projects.</p>

        <h3>E-Commerce Platform</h3>
        <p>
          Built a complete online shopping platform with payment integration.
        </p>

        <h3>Weather Dashboard</h3>
        <p>
          Displays real-time weather data and forecasts using public APIs.
        </p>
      </div>

      <hr />

      <h2>Skills</h2>
      <p>React • Node.js • JavaScript • MongoDB • AWS • Docker</p>

      <h2>Contact</h2>
      <p>Email: john.doe@example.com</p>
      <p>GitHub: github.com/johndoe</p>
      <p>LinkedIn: linkedin.com/in/johndoe</p>
    </div>
  );
}

export default App;

