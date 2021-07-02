import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { theme } from "../../utils/theme/theme";

import LogoNavbarMobile from '../../assets/svg/Logo';

export const NavWrapperOutline = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
`;
export const NavIcon = styled.div`
    background-color: black;
    position: relative;
    height: 4px;
    width: 18px;
    border-radius: 100px;
    margin-left: 67%;
    transform: translateX(-50%);

    ::before {
        content: '';
        position: absolute;
        right: 0;
        top: -9px;
        height: 4px;
        width:${({ open }) => open ? '36px' : '28px'};
        background-color: black;
        border-radius: 100px;
    }

    ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -9px;
        height: 4px;
        width: 36px;
        background-color: black;
        border-radius: 100px;
    }
`;

export const StyledBurger = styled.button`
  height: 50px;
  width: 50px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

export const StyledMenu = styled.nav`
  background-image: linear-gradient(45deg, #1C1C1C, #343434);
  //background-color: transparent;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
`;
export const CloseMenuMobileNavbar = styled.button`
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
    position: relative;

    ::after {
        content: '';
        background-color: white;
        width: 40px;
        height: 4px;
        border-radius: 100px;
        transform: rotate(-45deg);
        position: absolute;
        left: 0;
        top: 45%;
    }
    ::before {
        content: '';
        background-color: white;
        width: 40px;
        height: 4px;
        border-radius: 100px;
        transform: rotate(45deg);
        position: absolute;
        left: 0;
        top: 45%;
    }
    :hover {
        transform: rotate(90deg);
    }
`;
export const CloseMenuMobileNavbarWrapper = styled.div`
    position: absolute;
    right: 20px;
    top: 16px;
`;
export const LogoNavbarMobileStyled = styled(LogoNavbarMobile)`
    height: 40px;
    filter: invert(1);
    position: absolute;
    left: 20px;
    top: 12px;
`;

export const MobileNav = styled(Container)`
    //background-color: red;
    margin-top: 85px;
    width: 100%;
`;
export const MobileNavP = styled.p`
    //background-color: blue;
    width: 100%;
    padding: 5px 100px 5px 100px;
    width: 100%;
    flex: none;
    text-align: center;
    margin-top: 20px;

    @media ${ theme.device.mobileL } {
        padding: 5px 5px 5px 5px;
    }
`;
export const MobileNavLinkA = styled(NavLink)`
    //background-color: yellow;
    margin: 0;
    font-size: ${ theme.fontSize.DF_47 };
    font-family: 'Poppins-SemiBold';
    color: ${ theme.colors.white };
    position: relative;
    z-index: 99999;

    @media (max-height: 670px) {
        font-size: ${ theme.fontSize.DFF_47 };
    }
    @media (max-height: 620px) {
        font-size: ${ theme.fontSize.DFFF_47 };
    }

    :hover { 
        color: ${ theme.colors.gray };
    }
`;
export const MobileButtonAfterClickClose = styled.button`
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
`;