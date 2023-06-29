import React from "react";
import { styled } from "styled-components";
import { Navbar } from "./Navbar";

import HandWave from "../assets/wave.png";
const HeroSectionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  scroll-snap-align: center;
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InfoLeftAndRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const DeveloperHeading = styled.h1`
  display: inline;
  color: #2d2e32;
  font-size: 64px;
  line-height: 1.2;
  text-transform: capitalize;
  word-break: keep-all;
`;

const DeveloperSubDescription = styled.h1`
  color: #555;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 20px;
`;

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Navbar />
      <CenterContainer>
        <InfoContainer>
          <InfoLeftAndRight className="hero-desc">
            <DeveloperHeading>
              Full-Stack JS Developer{" "}
              <img src={HandWave} alt="helo" width={"60px"} height={"60px"} />
            </DeveloperHeading>
            <DeveloperSubDescription className="hero-sub-desc">
              Hi, I'm Gagan Vasanth. An Experinced Full-Stack Developer based out
              of Bangalore, India.
            </DeveloperSubDescription>
            <span>
              <a
                className="fa-icons"
                aria-label="linkedin"
                rel="nonreferer"
                target="_blank"
                href="https://www.linkedin.com/in/gagan-vasanth/"
              >
                <i class="fa-brands fa-linkedin fa-2xs"></i>
              </a>
              <a></a>
              <a
                className="fa-icons"
                aria-label="github"
                rel="nonreferer"
                target="_blank"
                href="https://github.com/Gagan-Vasanth"
              >
                <i class="fa-brands fa-github fa-2xs"></i>
              </a>
              <a></a>
            </span>
          </InfoLeftAndRight>
          <InfoLeftAndRight>
            <div className="hero-icon" />
          </InfoLeftAndRight>
        </InfoContainer>
      </CenterContainer>
    </HeroSectionContainer>
  );
};

// #2d2e32
