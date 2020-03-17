import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Project = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => setModalIsOpen(false);

  return(
    <>
      <div className="proj-card">
          <img src={props.img} className="proj-pic" alt="project"></img>
          <div className="proj-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <button onClick={() => setModalIsOpen(true)} className="btn" >More Info</button>
          <a href={props.link} target="_blank" rel="noopener noreferrer"><button className="btn">Demo</button></a>
          <a href={props.github} target="_blank" rel="noopener noreferrer"><button className="btn">Code</button></a>
      </div>
    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        >
          <i className="fas fa-times close" onClick={closeModal}></i>

          <h2>{props.title}</h2>
          <img src={props.img} className="modal-pic" alt="project"></img>
          <p>{props.description}</p>
          <h4>Languages/Frameworks</h4>
          <div className="bubbles">
            {props.languages.map((value, i) => {
              return <span className="bubble" key={i}>{value}</span>
            })}
          </div>         

      </Modal>
    </>
  );
}
export default Project;