import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../utils/theme/theme';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';

import Logo from '../../assets/svg/logo';

const NavbarModificated = styled(Navbar)`
    position: sticky;
    top: 0;
`;
const NavLogo = styled(Logo)`
    height: 50px;
    margin: 0 0 0 ${ theme.margin.default };
`;
const NavUl = styled.ul`
    margin: 0 ${ theme.margin.default } 0 0;
    padding: 0;
    width: 600px;
`;
const NavLi = styled.li`
    display: block;
    text-align: center;
    float: left;
    padding-left: 50px;
`;
const NavLinkAB = styled(Link)`

`;
const NavLinkA = styled(NavLink)`
    color: ${ theme.colors.black };
    font-family: 'Poppins-MediumItalic';
    font-size: 20px;
    position: relative;

    :hover {
        margin-left: 4px;
    }
    ::before {
        content: '';
        position: absolute;
        height: 3px;
        background-color: white;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 0;
        transition: 0.2s;
    }
    :hover::before {
        width: 100%;
    }
`;
const CVDEdfvdfg = styled.div`
    padding: 0;
`;
const NavbarBlank = styled.div`
    background-color: ${ theme.colors.transparent };
    width: 100%;
    height: 80px;
`;

const NavbarData = {
    home: 'Home',
    about: 'About',
    works: 'Works',
    contact: 'Contact'
}

function NavbarMain() {

    const [navbar, setNavbar] = useState("navbar");
  
    const listenScrollEvent = event => {
      if (window.scrollY < 73) {
        return setNavbar("navbar");
      } else if (window.scrollY > 70) {
        return setNavbar("navbar2");
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
  
      return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);
  
    return (
        <>
            <NavbarBlank />
            <CVDEdfvdfg className={navbar}>
                <NavbarModificated className="container-fluid navbar-expand-md navbar" collapseOnSelect expand="lg" bg="transparent" variant="dark">
                    <NavLinkAB to="/">
                        <Navbar.Brand>
                            <NavLogo />
                        </Navbar.Brand>
                    </NavLinkAB>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav ml-auto">
                            <NavUl>
                                <NavLi>
                                    <NavLinkA to="/" activeClassName="active" exact={true}>
                                        { NavbarData.home }
                                    </NavLinkA>
                                </NavLi>
                                <NavLi>
                                    <NavLinkA to="/about" activeClassName="active">
                                        { NavbarData.about }
                                    </NavLinkA>
                                </NavLi>
                                <NavLi>
                                    <NavLinkA to="/works" activeClassName="active">
                                        { NavbarData.works }
                                    </NavLinkA>
                                </NavLi>
                                <NavLi>
                                    <NavLinkA to="/contact" activeClassName="active">
                                        { NavbarData.contact }
                                    </NavLinkA>
                                </NavLi>
                            </NavUl>
                        </Nav>
                    </Navbar.Collapse>
                </NavbarModificated>
            </CVDEdfvdfg>
        </>
    );
  }
  
  export default NavbarMain;