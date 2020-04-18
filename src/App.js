import React from "react";
import "./App.css";
import AboutMePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <SkillsPage />
      <ProjectsPage />
      <AboutMePage />
      <ContactPage />
    </div>
  );
}

export default App;
