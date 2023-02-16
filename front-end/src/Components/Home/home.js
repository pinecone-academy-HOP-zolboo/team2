import React from "react";
import "./home.css";
import Meeting from "./Images/meeting.jpg";
import Hall from "./Images/e3.jpg";
import Event from "./Images/e2.jpg";
import Event1 from "./Images/Group 18.jpg";
import About from "./About/about"
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <div className="product">
          <div className="pro">
            <div className="grchg">
              <p>Instant collaborations for remote teams</p>
            </div>
            <div className="text2">
              <p>
                All in one for your remote team chats, collaboration and track
                projects
              </p>
            </div>
            <div className="inputs">
              <input type="text" placeholder="Email"></input>
              <button>Get early access</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Meeting">
        <div className="huree">
          <div className="discription">
            <Task
              text={
                "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
              }
              header={"Your Hub for teamwork"}
            />
          </div>
          <div className="meeting">
            <img alt="pic" src={Meeting} />
          </div>
        </div>
      </div>
      <div className="product1">
        <div className="huree">
          <div className="bck-img">
            <img alt="pic" src={Event} />
            <img alt="pic" src={Hall} />
          </div>
          <Task
            text={
              "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
            }
            header={"Simple task management"}
          />
        </div>
      </div>
      <div className="product2">
        <div className="huree">
          <div className="discription">
            <Task
              text={
                "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
              }
              header={"Scheduling that actually works"}
            />
          </div>
          <div className="pro2">
            <img alt="pic" src={Event1} />
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="h1">What people say about us</div>
        <div className="says">
          <About
            text={
              "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
            }
            name={"Amy Klassen"}
          />
          <About
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            name={"Jane Cooper"}
          />
          <About
            text={
              "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            }
            name={"Eleanor Pena"}
          />
          <About
            text={
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            }
            name={"Amy Klassen"}
          />
        </div>
      </div>
    </div>
  );
  function Task(props) {
    const { text, header } = props;
    return (
      <div className="dis1">
        <div className="header2">
          <p>{header}</p>
        </div>
        <div className="dis2">
          <p>{text}</p>
        </div>
        <div className="learn">
          <Button variant="link">Learn more</Button>
        </div>
      </div>
    );
  }
}
export default Home;
