import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import ImageSlider from "./ImageSlider";

const HomePage: FC = () => {
  return (
    <div style={{ height: "1500px" }}>
      <div style={{ position: "relative" }}>
        <ImageSlider />
        <div className="name">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="wrapper" style={{ fontSize: "35px" }}>
              PLEASE LOGIN HERE
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
