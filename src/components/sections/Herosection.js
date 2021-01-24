import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import background from "../../images/Hero-Image.jpg";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    depth = depth -50;
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
  <div>
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
      style={{ backgroundImage: `url(${background})`,  backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="intro">
          <img src="images/me.jpg" className="mb-4" style={{borderRadius: "50%", height: 120, width: 120  }}/>

          <h1 className="mb-2 mt-0">Alec Livinghouse</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "Front-End Developer",
                "CMS Guru",
                "QA Automator",
                "Full-Stack Engineer"
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={2}
            >
              Get In Touch!
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          <svg
            width="27"
            height="29"
            className="layer p1"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
          <rect
            x="7"
            width="3"
            height="25"
            rx="1.5"
            fill="#FFAA1D"
            fillRule="evenodd"
          />
        </svg>

          <svg
            width="26"
            height="26"
            className="layer p2"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(20)}
          >
          <rect
            x="7"
            width="3"
            height="25"
            rx="1.5"
            fill="#FF00CC"
            fillRule="evenodd"
          />
          </svg>

          <svg
            width="30"
            height="25"
            className="layer p3"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(25)}
          >
          <rect
            x="7"
            width="3"
            height="25"
            rx="1.5"
            fill="#5DADEC"
            fillRule="evenodd"
          />
          </svg>

          <svg
            width="15"
            height="23"
            className="layer p4"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <rect
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="15"
            height="23"
            className="layer p5"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(8)}
          >
            <rect
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#4F86F7"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="49"
            height="17"
            className="layer p6"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >
            <g fill="#FF4C60" fillRule="evenodd">
              <rect
                x="7"
                width="3"
                height="25"
                rx="1.5"
                fill="#FD5240"
                fillRule="evenodd"
              />
            </g>
          </svg>

          <svg
            width="26"
            height="26"
            className="layer p7"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(22)}
          >
          <rect
            x="7"
            width="3"
            height="25"
            rx="1.5"
            fill="#FFFFFF"
            fillRule="evenodd"
          />
          </svg>

          <svg
            width="19"
            height="21"
            className="layer p8"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <rect
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#84DE02"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="19"
            height="21"
            className="layer p8"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <rect
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#D9D6CF"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="30"
            height="25"
            className="layer p9"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
          <rect
            x="7"
            width="3"
            height="25"
            rx="1.5"
            fill="#DA2C43"
            fillRule="evenodd"
          />
          </svg>

          <svg
            width="47"
            height="29"
            className="layer p10"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(23)}
          >
            <g fill="#FFFFFF" fillRule="evenodd">
              <rect
                x="7"
                width="3"
                height="25"
                rx="1.5"
                fill="#FF8833"
                fillRule="evenodd"
              />
            </g>
          </svg>

          <svg
            width="33"
            height="20"
            className="layer p11"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >

         <rect
            x="7"
            width="3"
            height="25"
            rx="1.5"
            fill="#76D7EA"
            fillRule="evenodd"
          />
          </svg>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Herosection;
