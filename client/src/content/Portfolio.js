import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Project from '../components/Project';
import Fade from 'react-reveal/Fade';

import proj1 from '../img/petShelter.WebP';
import proj2 from '../img/proj2.WebP';

const Portfolio = props => {
  return(
    <>
      <div className="condiv portfolio">
        <div className="container">
          <h1 className="title">Portfolio</h1>
          <hr className="line"></hr>


          <div style={{overflow: 'hidden'}}>  
            <Fade left>
              <div className="left">
             
                <Project 
                  img={proj1}
                  title="Pet Shelter"
                  description="in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id"
                  languages={['HTML', 'CSS', 'Angular', 'Javascript', 'Typescript', 'Express', 'MongoDB', 'Bootstrap']}
                  github="https://github.com/nricaldi/pet-shelter"
                  link="http://3.134.83.102"
                />

                <Project 
                  img={proj1}
                  title="Pet Shelter"
                  description="in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id"
                  languages={['HTML', 'CSS', 'Angular', 'Javascript', 'Typescript', 'Express', 'MongoDB', 'Bootstrap']}
                  github="https://github.com/nricaldi/pet-shelter"
                  link="http://3.134.83.102"
                />
              </div>

            </Fade>

            <Fade right>
              <div className="right">
                <Project 
                  img={proj1}
                  title="Pet Shelter"
                  description="in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id"
                  languages={['HTML', 'CSS', 'Angular', 'Javascript', 'Typescript', 'Express', 'MongoDB', 'Bootstrap']}
                  github="https://github.com/nricaldi/pet-shelter"
                  link="http://3.134.83.102"
                />

                <Project 
                  img={proj1}
                  title="Pet Shelter"
                  description="in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id"
                  languages={['HTML', 'CSS', 'Angular', 'Javascript', 'Typescript', 'Express', 'MongoDB', 'Bootstrap']}
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
