import React from 'react';
import Project from '../components/Project';
import Fade from 'react-reveal/Fade';

import proj1 from '../img/petShelter.png';
import proj2 from '../img/travelBuddy.png';
import proj3 from '../img/ini.png';

const Portfolio = props => {
  return(
    <>
      <div className="portfolio">
        <div className="container">
          <h1 className="title">Portfolio</h1>
          <hr className="line"></hr>


          <div style={{overflow: 'hidden'}}>  
            <Fade left>
              <div className="left">
             
               <Project 
                  img={proj3}
                  title="INI Services"
                  description="Freelance work for a local construction company. I built their website using html, css, and javascript for the front end, and Python/Django for the backend. Added ability for clients to leave reviews for the company. Send emails using a contact form. The owner is able to add images for their gallery, the images are hosted on an AWS S3 Bucket. The site was deployed on a Linux server using apache."
                  languages={['HTML', 'CSS', 'Javascript', 'Python', 'Django', 'AWS', 'S3 Buckets', 'Linux', 'Apache']}
                  github="https://github.com/nricaldi/ini"
                  link="https://iniservices.com"
                />

              <Project 
                  img={proj1}
                  title="Pet Shelter"
                  description="in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id"
                  languages={['HTML', 'CSS', 'Angular', 'Javascript', 'Typescript', 'Express', 'MongoDB', 'Bootstrap',]}
                  github="https://github.com/nricaldi/pet-shelter"
                  link="http://3.134.83.102"
                />


              </div>

            </Fade>

            <Fade right>
              <div className="right">
              <Project 
                  img={proj2}
                  title="Travel Buddy"
                  description="Travel planner app where users can register and login, they can create a plan, view other users trips and they can join other users trips. This project's back end was built using python with the Django framework. The database was connected using django orm and the project was deployed using AWS"
                  languages={['HTML', 'CSS', 'Django', 'Python', 'Mysql', 'Bootstrap', 'AWS EC2', 'Linux', 'Nginx', 'gunicorn']}
                  github="https://github.com/nricaldi/travel-buddy"
                  link="http://18.223.149.119/"
                />

                <Project 
                  img={proj1}
                  title="Pet Shelter"
                  description="in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id"
                  languages={['HTML', 'CSS', 'Angular', 'Javascript', 'Typescript', 'Express', 'MongoDB', 'Bootstrap',]}
                  github="https://github.com/nricaldi/pet-shelter"
                  link="http://3.134.83.102"
                />

              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
