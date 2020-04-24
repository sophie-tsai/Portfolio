import React from "react";
import "./App.css";
import AboutMePage from "./components/AboutMePage/AboutMePage";
import ContactPage from "./components/ContactPage/ContactPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faUser,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCode, faEnvelope, faUser, faLaptopCode);

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
