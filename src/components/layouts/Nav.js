import React from "react";
import { Link } from "react-scroll";

function Nav({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <nav class="navbar sticky-top navbar-light bg-light">
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-home"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-user-following"></i>About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-graduation"></i>Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-blogs"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-note"></i>Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-bubbles"></i>Contact
              </Link>
            </li>
          </ul>
        </nav>
  );
}

export default Nav;
