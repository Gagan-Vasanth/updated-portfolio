import React from "react";
import styled from "styled-components";
import "./App.css";
import { AboutSection } from "./containers/AboutSection";
import { ContactSection } from "./containers/ContactSection";
import { HeroSection } from "./containers/HeroSection";
import { ProjectsSection } from "./containers/ProjectsSection";

const PortfolioMainContainer = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App = () => {
  return (
    <PortfolioMainContainer>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </PortfolioMainContainer>
  );
};

export default App;
