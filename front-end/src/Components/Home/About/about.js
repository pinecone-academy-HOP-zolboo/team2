import "./about.css";
import React from "react";
import star from "./star_purple500_24px.jpg";

function About(props) {
  const { text, name, profile } = props;
  return (
    <div className="first">
      <div className="ehnii">
        <div className="star">
          <img alt="pic" src={star} />
          <img alt="pic" src={star} />
          <img alt="pic" src={star} />
          <img alt="pic" src={star} />
          <img alt="pic" src={star} />
        </div>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="sull">
        <div className="profile">
          <img alt="pic" src={profile} />
          <marquee>{name}</marquee>
        </div>
      </div>
    </div>
  );
}

export default About;
