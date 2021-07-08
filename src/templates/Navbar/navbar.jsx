import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { content } from '../../utils/data/mainPageData';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css';
import {
    CVDEdfvdfg,
    NavbarModificated,
    NavLogo,
    NavBarIconMobileControl,
    NavUl,
    NavLi,
    NavLinkA,
    
} from './navbar.style';

import NavbarMobileIcon from '../../components/MobileNavSystemMenu/MobileNavSystemMenu';

function NavbarMain() {

    const [navbar, setNavbar] = useState("navbarstart");

    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setNavbar("navbarstart");
        } else if (window.scrollY > 70) {
        return setNavbar("navbarbegin");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <>
            <CVDEdfvdfg id="navbar" className={navbar}>
                <NavbarModificated className="container-fluid navbar-expand-lg navbar" collapseOnSelect expand="lg" bg="transparent" variant="dark">
                    <NavLink to="/" activeClassName="noneClassName">
                        <Navbar.Brand>
                            <NavLogo />
                        </Navbar.Brand>
                    </NavLink>
                    <NavBarIconMobileControl>
                        <NavbarMobileIcon />
                    </NavBarIconMobileControl>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav ml-auto">
                            <NavUl>
                                <NavLi>
                                    <NavLinkA to="/" activeClassName="active" exact={true}>
                                        { content.Navbar.home }
                                    </NavLinkA>
                                </NavLi>
                                <NavLi>
                                    <NavLinkA to="/about" activeClassName="active">
                                        { content.Navbar.about }
                                    </NavLinkA>
                                </NavLi>
                                <NavLi>
                                    <NavLinkA to="/works" activeClassName="active">
                                        { content.Navbar.works }
                                    </NavLinkA>
                                </NavLi>
                                <NavLi>
                                    <NavLinkA to="/contact" activeClassName="active">
                                        { content.Navbar.contact }
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