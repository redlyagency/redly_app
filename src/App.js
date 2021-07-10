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

import Home from './views/home';
import About from './views/about';
import Works from './views/works';
import Contact from './views/contact'; 
import NotFound from './views/404';
import Success from './views/success';

import Navbar from './templates/Navbar/navbar';
import ScrollToTop from './components/Scripts/scrollToTop';

import { theme } from './utils/theme/theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    transition: 0.5s;
    ::selection {
      background-color: #00000022;
    }
    .BoldSpanCont {
      font-family: 'Poppins-Bold';
    }
  }
    #root {margin: 0;padding: 0;}
    ::-webkit-scrollbar {width: 5px;} 
    ::-webkit-scrollbar-track {background-color: white;}
    ::-webkit-scrollbar-thumb {background-color: ${ theme.colors.darkergray };}
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
              <Switch location={location}>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/works" component={ Works } />
                <Route path="/contact" component={ Contact } />
                <Route path="/success" component={ Success } />
                <Route path="*" component={ NotFound } />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )} />
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;