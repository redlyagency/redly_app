import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import './fonts/fonts.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Bakesell from './views/portfolio/bakesell';
import Virap from './views/portfolio/virap';
import Rentbuild from './views/portfolio/rentbuild';
import Privanews from './views/portfolio/privanews';

import Navbar from './templates/Navbar/navbar';
import ScrollToTop from './components/Scripts/scrollToTop';

import { theme } from './utils/theme/theme';

//disable right click contex menu
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

const GlobalStyle = createGlobalStyle`
  #standard-basic {
    -webkit-user-select: auto !important;
    -khtml-user-select: auto !important;
    -moz-user-select: auto !important;
    -o-user-select: auto !important;
    user-select: auto !important;
  }
  * {
    font-family: 'Poppins', sans-serif;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    transition: 0.5s;
  }
  ::selection {
    background-color: #00000022;
  }
  .BoldSpanCont {
    font-family: 'Poppins-Bold';
  }
  #root {margin: 0;padding: 0;}
  ::-webkit-scrollbar {width: 5px;} 
  ::-webkit-scrollbar-track {background-color: ${ theme.colors.gray };}
  ::-webkit-scrollbar-thumb {background-color: ${ theme.colors.black };}
  body {
    box-sizing: border-box;
    margin: 0; padding: 0;
  }
`;
const AppWrapper = styled.div`
  //background-color: gray;
  background-image: ${theme.colors.bg_gradient};
  max-width: 1920px;
  margin: 0 auto 0 auto;
  position: relative;
`;

const Home = lazy(() => import('./views/home'));
const About = lazy(() => import('./views/about'));
const Works = lazy(() => import('./views/works'));
const Contact = lazy(() => import('./views/contact')); 
const NotFound =lazy(() => import('./views/404'));
const Success = lazy(() => import('./views/success'));

function App({ location }) {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={ 300 }
                classNames="fade"
              >
                <Suspense fallback={
                  <div />
                }>
                  <Switch location={location}>
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/works" component={ Works } />
                    <Route path="/contact" component={ Contact } />
                    <Route path="/success" component={ Success } />
                    {/* Start Portfolio section - (Next version system i'll be updated) */}
                    <Route path="/bakesell" component={ Bakesell } />
                    <Route path="/virap" component={ Virap} />
                    <Route path="/rentbuild" component={ Rentbuild } />
                    <Route path="/privanews" component={ Privanews } />
                    {/* End Portfolio section - (Next version system i'll be updated) */}
                    <Route path="*" component={ NotFound } />
                  </Switch>
                </Suspense>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;