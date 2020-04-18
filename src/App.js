import React from "react";
import "./App.css";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
      <SkillsPage />
      <ProjectsPage />
      <AboutMePage />
      <ContactPage />
    </div>
  );
}

export default App;
