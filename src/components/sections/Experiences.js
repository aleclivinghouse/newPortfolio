import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "UC Santa Cruz",
    years: "2014-2018",
    content:
      "Bachelors in Film and Digital Media",
  },
  {
    id: 2,
    title: "Thinkful Coding BootCamp",
    years: "2019",
    content:
      "Web Development Immersive",
  }
];

const experienceData = [
  {
    id: 1,
    title: "CMS Developer",
    years: "2020 - Present",
    content:
      "Part of a team at InnoceanUSA that utilized Adobe Experience Manager to help build Genesis.com",
  },
  {
    id: 2,
    title: "Full-Stack Engineer Intern",
    years: "2018",
    content:
      "Interned at a Fitness start called SaRA Health where I helped build their platform",
  },
  {
    id: 3,
    title: "Web Developer",
    years: "2018",
    content:
      "Built the website for Above the Noise Communications using Django",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
