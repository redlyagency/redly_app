import styled from "styled-components";
import Logo from '../../assets/svg/Logo.svg';
import { theme } from '../../utils/theme/theme';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarModificated = styled(Navbar)`
    position: sticky;
    top: 0;
`;
export const NavLogo = styled(Logo)`
    height: 40px;
    margin: 0 0 0 ${ theme.margin.default };

    @media ${ theme.device.tablet } {
        margin: 0 0 0 ${ theme.margin.mobile };
    }
`;
export const NavUl = styled.ul`
    margin: 0 ${ theme.margin.default } 0 0;
    padding: 0;
    width: 630px;

    @media ${ theme.device.laptop } {
        margin: 0;
        width: 550px;
    }
`;
export const NavLi = styled.li`
    display: block;
    text-align: center;
    float: left;
    padding-left: 50px;
`;
export const NavBarIconMobileControl = styled.div`
    border: none;
    background-color: transparent;
    height: 50px;
    width: 50px;
    display: none;

    @media ${ theme.device.tablet } {
        display: unset;
    }
`;
export const NavLinkA = styled(NavLink)`
    color: ${ theme.colors.black };
    font-family: 'Poppins-MediumItalic';
    font-size: 20px;
    position: relative;
    text-transform: uppercase;

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
export const CVDEdfvdfg = styled.div`
    padding: 0;
`;