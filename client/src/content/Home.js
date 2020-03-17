import React from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';


const Home = props => {
  return(
      <>
        <div className="condiv home">
          
          <Bounce cascade>
            <h1>Hello,</h1>            
            <h1 className="red">I'm Nicolas Ricaldi.</h1>
            <h1>Software Developer.</h1>
          </Bounce>

          <div style={{overflow: 'hidden'}}>
            <Zoom right>
              <div>
                <Link to="/contact"><button className="btn">Contact Me</button></Link>              
              </div>
            </Zoom>
          </div>

        </div>
      
      </>
  );
}

export default Home;