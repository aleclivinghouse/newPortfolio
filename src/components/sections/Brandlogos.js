import React from "react";
import Pagetitle from "../elements/Pagetitle";
import classnames from 'classnames';

const brandlogoData = [
  {
    id: 1,
    image: "devicon-react-original-wordmark colored",
  },
  {
    id: 2,
    image: "devicon-angularjs-plain",
  },
  {
    id: 3,
    image: "devicon-vuejs-plain colored",
  },
  {
    id: 4,
    image: "devicon-express-original colored",
  },
  {
    id: 5,
    image: "devicon-javascript-plain colored",
  },
  {
    id: 6,
    image: "devicon-postgresql-plain colored",
  },
  {
    id: 7,
    image: "devicon-python-plain colored",
  },
  {
    id: 8,
    image: "devicon-flask-original colored",
  },
  {
    id: 9,
    image: "devicon-java-plain colored",
  },
  {
    id: 10,
    image: "devicon-cucumber-plain colored",
  },
  {
    id: 11,
    image: "devicon-mongodb-plain colored",
  },
  {
    id: 12,
    image: "devicon-nodejs-plain colored",
  }
];


function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <Pagetitle title="Technoglogies I Love" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <i className={`${brandlogo.image}`} alt="client-name" style={{fontSize:"75px"}}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
