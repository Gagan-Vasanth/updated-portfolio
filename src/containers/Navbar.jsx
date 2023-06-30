import React from "react";
import { styled } from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 80px;
  z-index: 100;
  background-color: white;
  position: fixed;
  width: 100vw;
`;

const PortfolioLogo = styled.div`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  margin-left: -15%;
`;

const NavElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavElements = styled.div`
  font-weight: 500;
  text-decoration: none;
  font-size: 18px;
  margin: 0px 14px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #adacac;
`;

export const Navbar = () => {
  const onNavChange = (i) => {
    const allNavElements = document.querySelectorAll(".nav-element");
    console.log(allNavElements);
    allNavElements.forEach((navE) => {
      console.log(navE, "nav element");
      return navE.classList.remove("nav-active");
    });
    allNavElements[i].classList.add("nav-active");
  };
  return (
    <SectionContainer>
      <NavElementsContainer>
        <NavElements
          className="nav-element nav-active"
          //   href="#home"
          onClick={(e) => onNavChange(0)}
        >
          Home
        </NavElements>
        <NavElements
          className="nav-element"
          //   href="#about"
          onClick={(e) => onNavChange(1)}
        >
          About
        </NavElements>
        <NavElements
          className="nav-element"
          //   href="#projects"
          onClick={(e) => onNavChange(2)}
        >
          Projects
        </NavElements>
        <NavElements
          className="nav-element"
          //   href="#contact-me"
          onClick={(e) => onNavChange(3)}
        >
          Contact me
        </NavElements>
      </NavElementsContainer>
      <PortfolioLogo>Gagan Vasanth</PortfolioLogo>
      <span>
        <a
          className="profile-links"
          aria-label="linkedin"
          rel="nonreferer"
          target="_blank"
          href="https://www.linkedin.com/in/gagan-vasanth/"
        >
          <i className="fa-brands fa-linkedin fa-2xs"></i>
        </a>
        <a></a>
        <a
          aria-label="github"
          className="profile-links"
          rel="nonreferer"
          target="_blank"
          href="https://github.com/Gagan-Vasanth"
        >
          <i className="fa-brands fa-github fa-2xs"></i>
        </a>
        <a></a>
      </span>
    </SectionContainer>
  );
};

//rafc - shortcut for creating functional components
