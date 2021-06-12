import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './fonts/fonts.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Contact from './pages/contact'; 
import NotFound from './pages/404';

import Navbar from './templates/Navbar/navbar';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  body {
    /* styled */
  }
`;
const AppWrapper = styled.div`
  /* styled */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
      <Router>
        
        <div className="container">
        <Navbar />
        App.js - test
        </div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/works" component={ Works } />
          <Route path="/contact" component={ Contact } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
      </AppWrapper>
    </>
  );
}

export default App;
