import React from 'react';
import TransparentFooterTemplate from '../../templates/Footer/transparentFooterTemplate';
import {
  StyledBurger,
  NavIcon,
  StyledMenu,
  NavWrapperOutline,
  CloseMenuMobileNavbar,
  CloseMenuMobileNavbarWrapper,
  LogoNavbarMobileStyled,
  MobileNav,
  MobileNavP,
  MobileNavLinkA,
  MobileButtonAfterClickClose,
} from './MobileNavSystemMenu.style';
import { content } from '../../utils/data/mainPageData';

const NavIconButton = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <NavIcon />
      </StyledBurger>
    )
}

const Menu = ({ open, setOpen }) => {
    return (
      <StyledMenu open={open}>
        <LogoNavbarMobileStyled />
        <CloseMenuMobileNavbarWrapper>
          <CloseMenuMobileNavbar
          onClick={() => setOpen(!open)}
          />
        </CloseMenuMobileNavbarWrapper>
        <MobileNav>
          <MobileNavP>
            <MobileButtonAfterClickClose onClick={() => setOpen(!open)}>
              <MobileNavLinkA to="/" activeClassName="homeActive" exact={true}>
                { content.Navbar.home }
              </MobileNavLinkA>
            </MobileButtonAfterClickClose>
          </MobileNavP>
          <MobileNavP>
            <MobileButtonAfterClickClose onClick={() => setOpen(!open)}>
                <MobileNavLinkA to="/about" activeClassName="aboutActive">
                  { content.Navbar.about }
                </MobileNavLinkA>
            </MobileButtonAfterClickClose>
          </MobileNavP>
          <MobileNavP>
            <MobileButtonAfterClickClose onClick={() => setOpen(!open)}>
                <MobileNavLinkA to="/works" activeClassName="worksActive">
                  { content.Navbar.works }
                </MobileNavLinkA>
            </MobileButtonAfterClickClose>
          </MobileNavP>
          <MobileNavP>
            <MobileButtonAfterClickClose onClick={() => setOpen(!open)}>
                <MobileNavLinkA to="/contact" activeClassName="contactActive">
                  { content.Navbar.contact }
                </MobileNavLinkA>
            </MobileButtonAfterClickClose>
          </MobileNavP>
        </MobileNav>
        <TransparentFooterTemplate />
      </StyledMenu>
    )
  }

export const NavMobileIcon = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <div ref={node}>
            <NavWrapperOutline>
                <NavIconButton
                    open={open}
                    setOpen={setOpen}
                />
                <Menu
                    open={open}
                    setOpen={setOpen}
                />
            </NavWrapperOutline>
        </div>
    )
}

export default NavMobileIcon;