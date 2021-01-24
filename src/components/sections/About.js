import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";


const aboutContent = {
  name: "Bolby",
  avatarImage: "/images/me.jpg",
  content:
    "I graduated from UC Santa Cruz in 2018 with a B.A. in Film and Digital Media. Since then, I have been building awesome things for amazing clients."
};

const progressData = [
  {
    id: 1,
    title: "Nerdiness",
    percantage: 60,
    progressColor: "#FFD15C",
  },
  {
    id: 2,
    title: "Curiosity",
    percantage: 40,
    progressColor: "#FF4C60",
  },
  {
    id: 3,
    title: "That Feeling When It Finally Works",
    percantage: 100,
    progressColor: "#6C6CE5",
  },
];

const counterData = [
  {
    id: 1,
    title: "Years Experience",
    count: 4,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cups of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Hours on Stack Overflow",
    count: 6524,
    icon: "icon-bulb",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{aboutContent.content}</p>
                  <div className="mt-3">
                    <a href="/files/AlecLivinghouseResume.pdf" className="btn btn-default" download>
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      throttleInteval={2}
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row justify-content-md-center">
          {counterData.map((counter) => (
            <div key={counter.id}>
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
