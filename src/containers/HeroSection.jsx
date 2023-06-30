import React from "react";
import { styled } from "styled-components";
import { Navbar } from "./Navbar";

import HandWave from "../assets/wave.png";
import HtmlIcon from "../assets/html.png";
import CssIcon from "../assets/css3.png";
import JsIcon from "../assets/javascript.png";
import NodeJsIcon from "../assets/nodejs.png";
import ReactIcon from "../assets/reactjs.png";
import SQLIcon from "../assets/sql.png";
import TailwindIcon from "../assets/tailwind.png";
import MongoIcon from "../assets/mongodb.png";
import AWSIcon from "../assets/aws.png";

import { Player } from "@lottiefiles/react-lottie-player";

const HeroSectionContainer = styled.div`
  height: 100%;
  width: 100vw;
  scroll-snap-align: center;
`;

const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  padding: 0 4rem;
  padding-top: 200px;
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10rem;
  justify-content: space-between;
  position: relative;
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

const TechStackContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const TechStackHeading = styled.div`
  border-right: 2px solid rgba(45, 46, 50, 0.5);
  color: #2d2e32;
  font-weight: 500;
  font-size: 20px;
  margin-right: 2%;
  padding-right: 2rem;
`;

const TechIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
`;

const TechIconContainer = styled.div`
  width: 65px;
  height: 65px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  cursor: pointer;
`;

const ScrollAnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0px;
  align-items: flex-start;
  justify-content: center;
`;

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Navbar />
      <CenterContainer>
        <InfoContainer className="info-container">
          <InfoLeftAndRight className="hero-desc">
            <DeveloperSubDescription
              className="hero-sub-desc"
              style={{ marginLeft: "3px", lineHeight: "2.5" }}
            >
              Hi! I'm <b>Gagan Vasanth</b>
            </DeveloperSubDescription>
            <DeveloperHeading>
              Full-Stack JS Developer{" "}
              <img src={HandWave} alt="helo" width={"60px"} height={"60px"} />
            </DeveloperHeading>
            <DeveloperSubDescription className="hero-sub-desc">
              An Experinced Full-Stack Developer based out of Bangalore, India.
            </DeveloperSubDescription>
          </InfoLeftAndRight>
          <InfoLeftAndRight>
            <div className="hero-icon" />
          </InfoLeftAndRight>
        </InfoContainer>
        <TechStackContainer>
          <TechStackHeading>Tech Stack</TechStackHeading>
          <TechIconsContainer>
            <TechIconContainer>
              <img src={HtmlIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={CssIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={JsIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={ReactIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={TailwindIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={NodeJsIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={SQLIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={MongoIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
            <TechIconContainer>
              <img src={AWSIcon} width={"34px"} height={"34px"} />
            </TechIconContainer>
          </TechIconsContainer>
        </TechStackContainer>
        <ScrollAnimationContainer>
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_szlwbike.json"
            style={{ height: "100px", width: "100px" }}
          ></Player>
        </ScrollAnimationContainer>
      </CenterContainer>
    </HeroSectionContainer>
  );
};

// #2d2e32
