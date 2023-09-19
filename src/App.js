import React from "react";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      {/* <About /> */}
      <Header />
      <ProjectCard />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
