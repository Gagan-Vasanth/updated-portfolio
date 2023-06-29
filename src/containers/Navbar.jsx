import React from "react";
import { styled } from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  z-index: 100;
  background-color: white;
  position: fixed;
  width: 100vw;
`;

const PortfolioLogo = styled.div`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const NavElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavElements = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin: 0px 14px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: blue;
  }
`;

export const Navbar = () => {
  return (
    <SectionContainer>
      <PortfolioLogo>Gagan.dev</PortfolioLogo>
      <NavElementsContainer>
        <NavElements>Home</NavElements>
        <NavElements>About</NavElements>
        <NavElements>Projects</NavElements>
        <NavElements>Contact</NavElements>
      </NavElementsContainer>
    </SectionContainer>
  );
};

//rafc - shortcut for creating functional components
