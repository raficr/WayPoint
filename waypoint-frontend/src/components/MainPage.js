import React from "react";
import "../styles/MainPage.css";

const MainPage = () => {
  const handleLogin = () => {
    window.location.href = "/login.html"; // Redirects to login.html
  };

  return (
    <div
      className="main-page"
      style={{
        backgroundImage: "url('/images/main-pic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="title-container">
        <h1 className="title">
          <span className="letter">W</span>
          <span className="letter">A</span>
          <span className="letter">Y</span>
          <span className="letter">P</span>
          <span className="letter">O</span>
          <span className="letter">I</span>
          <span className="letter">N</span>
          <span className="letter">T</span>
        </h1>
      </div>
      <button className="start-btn" onClick={() => window.location.href = "http://127.0.0.1:8000/"}>
        Start Traveling!
      </button>
      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default MainPage;
