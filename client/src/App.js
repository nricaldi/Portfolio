import React, { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';


import { Burger, Menu } from './components';
import Home from './content/Home';
import About from './content/About';
import Portfolio from './content/Portfolio';
import Contact from './content/Contact';

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(!node, () => setOpen(false));
  
  // console.log(node);
  return (
    <>
    <Router>
    <div className="app">
      <ThemeProvider theme={theme}>
        <div ref={node}>
          <FocusLock disabled={!open} >
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} onClick={() => setOpen(false)}/>
          </FocusLock>
        </div>
      </ThemeProvider>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/portfolio">
        <Portfolio />
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

    </div>
    </Router>
    </>
  );
}

export default App;