import React, { useState } from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const [ state, setState ] = useState ({
    'NavItemActive': ''
  });

  const activeItem = (e, item) => {

    // console.log(e);
    // console.log(item);
    
    if (state.NavItemActive.length>0) {
        document.getElementById(state.NavItemActive).classList.remove('active');
    }

    setState({'NavItemActive': item}); 
    document.getElementById(item).classList.add('active');
}

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props} >
      
      {/* <img src={logo} alt="logo" className="logo"></img> */}

      <Link to="/" tabIndex={tabIndex} onClick={e => activeItem(e, "home")}>
        <img 
          src={logo} 
          alt="logo" 
          style={{ width: 100}}
        />
      </Link>

      <Link to="/" tabIndex={tabIndex} id="home" onClick={e => activeItem(e, "home")}>
        <span aria-hidden="true"></span>
        Home
      </Link>

      <Link to="/about" tabIndex={tabIndex} id="about" onClick={e => activeItem(e, "about")}>
        <span aria-hidden="true"></span>
        About
      </Link>

      <Link to="/portfolio" tabIndex={tabIndex} id="portfolio" onClick={e => activeItem(e, "portfolio")}>
        <span aria-hidden="true"></span>
        Portfolio
      </Link>

      <Link to="/contact" tabIndex={tabIndex} id="contact" onClick={e => activeItem(e, "contact")}>
        <span aria-hidden="true"></span>
        Contact
      </Link>
    
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;