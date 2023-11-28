import React from "react";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile";
import Header from "./components/Header";
import ErrorAlert from "./components/Alert/ErrorAlert.jsx";

function App() {

  return (
    <div>
      <Navbar />
      <ErrorAlert status="info" />
      <Profile />
      <Header />
      <ProjectCard />
    </div>
  );
}

export default App;
