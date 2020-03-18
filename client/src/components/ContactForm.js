import React, { useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

const ContactForm = props => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = e => {
      e.preventDefault();
      console.log("trying to send mail");
      // console.log({name, company, email, number, message});

      axios.post("http://localhost:8000/send", {name, company, email, number, message})
          .then(res => console.log(res))
          .catch(err => console.log(err));

      setName("");
      setCompany("");
      setEmail("");
      setNumber("");
      setMessage("");
  }

  return(
    <>
      <Fade>
      <div className="contactcon">
        <h1 className="brand"><span>Nicolas</span> Ricaldi</h1>
        <div className="wrapper">
          <div className="company-info">
            {/* <h3>Nicolas Ricaldi</h3> */}
            <ul>
                <li><i className="fas fa-map-marked-alt"></i> - Northern Virginia</li>
                {/* <li><i className="fa fa-phone"></i> - (571)-288-4243</li> */}
                <li><i className="fa fa-envelope"></i> - nr.ricaldi@gmail.com</li>
                {/* <li><a href="#" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> - LinkedIn</a> </li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>  - GitHub</a></li> */}

                {/* <li><a href="#" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a> 
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li> */}
            </ul>
            
            <div className="links">
              <a href="https://www.linkedin.com/in/nicolas-ricaldi/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a> 
              <a href="https://github.com/nricaldi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>

          </div>
      
          <div className="contact">
            <h3>Email Me</h3>

            <form onSubmit={sendMail}>
              <p>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
              </p>

              <p>
                <label>Company</label>
                <input 
                    type="text" 
                    name="company" 
                    onChange={e => setCompany(e.target.value)}
                    value={company}
                />    
                
              </p>

              <p>
                <label>Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />                      
                
              </p>

              <p>
                <label>Phone Number</label>
                <input 
                    type="text" 
                    name="phone" 
                    onChange={e => setNumber(e.target.value)}
                    value={number}
                />    
                
              </p>

              <p className="full">
                <label>Message</label>
                <textarea 
                    name="message" 
                    rows="5" 
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
         
              </p>

              <p className="full">
                <button type="submit">Submit</button>
              </p> 
            </form>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
}

export default ContactForm;