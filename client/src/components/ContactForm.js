import React, { useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';

const initialErrors = {
  nameError: "",
  companyError: "",
  emailError: "",
  numberError: "",
  messageError: ""
}

const ContactForm = props => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState(initialErrors);

  const validate = () => {
    let nameError = "";
    let companyError = "";
    let emailError = "";
    let numberError = "";
    let messageError = "";

    if(name.length === 0)
      nameError = <p className="error">Name cannot be blank</p>;

    if(company.length === 0)
      companyError = <p className="error">Company cannot be blank</p>;
    
    if(!email.includes('@'))
      emailError = <p className="error">Invalid email</p>;
    
    if(number.length < 10)
      numberError = <p className="error">Invalid phone number</p>;
    
    if(message.length < 5)
      messageError = <p className="error">Message must be at least 5 characters</p>;
  

    if(nameError || companyError || emailError || numberError || messageError) {
      setErrors({nameError, companyError, emailError, numberError, messageError});
      return false;
    }

    return true;
  }

  const sendMail = e => {
      e.preventDefault();
      const isValid = validate();

      if (isValid){
        axios.post("http://localhost:8000/send", {name, company, email, number, message})
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setName("");
        setCompany("");
        setEmail("");
        setNumber("");
        setMessage("");
        setErrors(initialErrors);
      }

  }

  return(
    <>
      <Fade>
      <div className="contactcon">
        <h1 className="brand"><span>Nicolas</span> Ricaldi</h1>
        <div className="wrapper">
          <div className="company-info">
            <ul>
                <li><i className="fas fa-map-marked-alt"></i> - Northern Virginia</li>
                <li><i className="fa fa-envelope"></i> - nr.ricaldi@gmail.com</li>
            </ul>

            <div className="links">
              <a href="https://www.linkedin.com/in/nicolas-ricaldi/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i></a> 
              <a href="https://github.com/nricaldi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>

          </div>
      
          <div className="contact">
            <h3>Email Me</h3>

            <form onSubmit={sendMail}>
              <div>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                {errors.nameError}
              </div>

              <div>
                <label>Company</label>
                <input 
                    type="text" 
                    name="company" 
                    onChange={e => setCompany(e.target.value)}
                    value={company}
                />    
                {errors.companyError}               
              </div>

              <div>
                <label>Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />                      
                {errors.emailError}
              </div>

              <div>
                <label>Phone Number</label>
                <input 
                    type="text" 
                    name="phone" 
                    onChange={e => setNumber(e.target.value)}
                    value={number}
                />    
                {errors.numberError}
              </div>

              <div className="full">
                <label>Message</label>
                <textarea 
                    name="message" 
                    rows="5" 
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />
                {errors.messageError}
              </div>

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