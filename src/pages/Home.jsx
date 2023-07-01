import React from "react";
import Navbar from "../components/navbar";
import { Button } from "@mui/material";
import "../styles/Home.css";
import herobg from "../assets/home-bg.mp4";

const Home = () => {
  return (
    <div>
      <div className="home-nav">
        <Navbar />
      </div>
      <div className="hero">
        <video className="hero-video" autoPlay muted loop>
          <source src={herobg} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">CMNav</h1>
          <h2 className="hero-subtitle">
            The only way to discover the city secrets
          </h2>
          <Button variant="contained" style={{ backgroundColor: "#008080" }}>
            Plan Your Visit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
