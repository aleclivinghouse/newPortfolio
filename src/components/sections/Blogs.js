import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";
import { Parallax, Background } from 'react-parallax';
import dotenv from 'dotenv';
dotenv.config();

const allBlogs = [
  {
    id: 1,
    title: "Two Truths And A Lie",
    description: "A social networking platform that allows users to play two truths and a lie. Built using Node, MongoDb, Express, and React",
    liveLink: "https://agile-retreat-41591.herokuapp.com/",
    image: "/images/projects/twoTruths-screen.png",
    github: "https://github.com/aleclivinghouse/quizshare"
  },
  {
    id: 2,
    title: "Stoichiometry Calculator",
    description: "An App that performs Stoichiometry Calculations. Built using Node, MongoDb, Express, and React",
    liveLink: "https://stoichiometry-full-stack.herokuapp.com/",
    image: "/images/projects/stoichiometry-screen.png",
    github: "https://github.com/aleclivinghouse/FullStack-Stoichiometry"
  },
  {
    id: 3,
    title: "CompareWheel",
    description: "An app that allows user to find used cars in there local area. Build using React, Redux, and Chart.js",
    liveLink: "https://www.youtube.com/watch?v=M04DG7q8zds",
    image: "/images/projects/compareWheelScreen.png",
    github: "https://github.com/aleclivinghouse/car-app"
  },
  {
    id: 4,
    title: "Facebook Selenium E2E",
    description: "E2E testing on a facebook clone: https://spbk.herokuapp.com/#/login. Built using Java, Selenium, JUnit, Maven, and Cucumber",
    liveLink: "https://github.com/aleclivinghouse/Selenium-Cucumber-E2E",
    image: "/images/projects/testScreen.png",
    github: "https://github.com/aleclivinghouse/Selenium-Cucumber-E2E"
  },
  {
    id: 5,
    title: "Chat App",
    description: "A realtime chat app with users, notifications, and chatrooms. Built using Node, MongoDb, Express, and React and Socket.io",
    liveLink: "https://www.youtube.com/watch?v=evAleBodSPU",
    image: "/images/projects/chatAppScreen.png",
    github: "https://github.com/aleclivinghouse/mern-realtime-chat"
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Projects" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4 mb-5" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
