import React from 'react';
import Card from '../components/Card';
import Fade from 'react-reveal/Fade';

const About = props => {
  const speed = <i className="fas fa-tachometer-alt"></i>;
  const shake = <i className="fas fa-handshake"></i>;
  const details = <i className="fas fa-search"></i>;

    return(
      <>
        <div className="about">
          <div className="container">
            <h1 className="title">About</h1>
            {/* <div style={{overflow: 'hidden'}}> */}
              {/* <Bounce right> */}
                <hr className="line"></hr>
              {/* </Bounce> */}
            {/* </div>  */}
              
            <div className="cards">

            <Fade>
              <div className="card1">
                <Card 
                  title="Fast Learner"
                  img={speed}
                  text="I love writing code and like to explore new languages I think will make me more effecient in my daily tasks."
                  
                />
              </div>
            {/* </Zoom> */}

            {/* <Zoom> */}
              <div className="card2">
                <Card 
                  title="Committed"
                  img={shake}
                  text="Are you looking for a reliable that will get the job done? Look no further! I deliver work on time and communicate often with my team if necessary."
                />
              
              </div>
            {/* </Zoom> */}

            {/* <Zoom right> */}
              <div className="card3">
                <Card 
                  title="Attention to Details"
                  img={details}
                  text="Understanding the mechanisms of each language is what I am all about! I do not like the feeling of solving a problem without knwoing how I did it."
                /> 
              </div>
            </Fade>

          </div>

            {/* <Card 
              title="Fast Learner"
              img={speed}
              text="I love writing code and like to explore new languages I think will make me more effecient in my daily tasks."
              className="card1"
            />
            
            <Card 
              title="Committed"
              img={shake}
              text="Are you looking for a reliable that will get the job done? Look no further! I deliver work on time and communicate often with my team if necessary."
              className="card2"
            />
            
            <Card 
              title="Attention to Details"
              img={details}
              text="Understanding the mechanisms of each language is what I am all about! I do not like the feeling of solving a problem without knwoing how I did it."
              className="card3"
            /> */}
          </div>
          
        </div>
      </>
    );
}

export default About;