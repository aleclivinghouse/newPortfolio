import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function Blog({ blogData }) {

  const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

  const { id, title,  image, description, liveLink, github } = blogData;

   const [modalIsOpen,setIsOpen] = React.useState(false);

  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };

      function openModal() {
      setIsOpen(true);
     }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      console.log("modal is open")
    }

    function closeModal(){
      setIsOpen(false);
     }

  return (
  <div>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <img src={image} style={{width: "500px"}}/>
      </Modal>
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="blog-item rounded bg-white shadow-dark" style={{height: "300px"}}>
        <div className="details">
          <h4 className="my-0 title" style={{height: "50px"}}>
              {title}
          </h4>
          <div>
            <p style={{height: "100px"}} className="mt-">{description}</p>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
              <div class="btn-group" role="group" aria-label="Basic example">
                <a href={github} type="button" class="btn btn-default btn-sm">Github</a>
                <button type="button" class="btn btn-default btn-sm" onClick={openModal}>Preview</button>
                <a href={liveLink} type="button" class="btn btn-default btn-sm" href={liveLink}>Live Link</a>
              </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  </div>
  );
}

export default Blog;
