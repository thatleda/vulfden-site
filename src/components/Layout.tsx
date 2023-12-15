import React, { useRef, useState } from "react";
import {
  useClickAnyWhere,
  useMediaQuery,
  useOnClickOutside,
} from "usehooks-ts";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import GlobalStyle from "../globalStyles";
import Animation from "./base/Animation";
import Button from "./base/Button";
import Burger from "./svg/Burger";
import Wolf from "./svg/Wolf";

type LayoutProps = {
  children: React.ReactNode;
  showFooter?: boolean;
};

const Frame = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
`;

const Header = styled.header`
  align-items: center;
  background: var(--background-color);
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: var(--header-height);
  width: 100%;
`;

const AnimatedLinks = styled(Animation)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--page-width);
  padding: var(--page-padding);
  width: 100%;
`;

const Footer = styled.footer`
  background: var(--background-color);
  border-top: 3px solid var(--box-shadow-hover-color);
`;

const Logo = styled.h2`
  font-size: 2rem;
  color: var(--primary-color);
`;

const Link = styled(GatsbyLink)`
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 700;
  margin-right: 4rem;
  padding: 0;
  position: relative;
  text-align: center;
`;

const TopNavigation = styled.nav`
  align-items: center;
  background: var(--background-color);
  display: flex;
  justify-content: space-between;
  width: auto;
`;

const LinkWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--page-width);
  padding: var(--page-padding);
  width: 100%;
`;

const BurgerBox = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2rem;
  justify-content: space-around;
  padding: 0;
  width: 2rem;
  z-index: 12;
`;

const Sidebar = styled.div`
  bottom: 0;
  display: block;
  height: 100vh;
  outline: 0;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
  visibility: hidden;
  width: 100%;
  z-index: 10;
`;

const SideNavigation = styled.nav`
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 2rem;
  position: relative;
  right: 0;
  text-align: left;
  width: 55%;
`;

const Backdrop = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out;
  display: none;
  filter: blur(5px);
  overflow: hidden;
  pointer-events: none;
  user-select: none;
`;

const SideNavLink = styled(GatsbyLink)`
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.5rem 0;
  text-align: center;
`;

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  const [isMenuOpen, openMenu] = useState(false);
  const outsideRef = useRef(null);
  useOnClickOutside(outsideRef, () => openMenu(false));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const smallScreen = useMediaQuery("(max-width: 1030px)");
  return (
    <Frame>
      <GlobalStyle colorMode={prefersDarkMode ? "dark" : "light"} />
      <Header>
        <AnimatedLinks type="fadeDown" duration={200}>
          <a aria-current="page" aria-label="home" href="/">
            <Wolf width="5rem" height="5rem" />
          </a>
          {smallScreen ? (
            <BurgerBox
              type="button"
              id="openMenu"
              onClick={() => openMenu(true)}
              style={isMenuOpen ? { display: "none" } : undefined}
            >
              <Burger width="3rem" height="3rem" />
            </BurgerBox>
          ) : (
            <TopNavigation>
              <Link to="/#who">Who?</Link>
              <Link to="/#previously">Previously</Link>
              <Link to="/ramblings">Blog</Link>
              <Link to="/#testimonials">Working with Leda</Link>
              <Link to="/#contact">Contact</Link>
              <Button href="/resume.pdf" text="CV" />
            </TopNavigation>
          )}
          {isMenuOpen && smallScreen && (
            <>
              <Sidebar
                style={
                  isMenuOpen
                    ? { transform: "translateX(0)", visibility: "visible" }
                    : undefined
                }
                aria-hidden={!isMenuOpen}
                tabIndex={isMenuOpen ? 1 : -1}
              >
                <SideNavigation ref={outsideRef}>
                  <SideNavLink to="/#who">Who?</SideNavLink>
                  <SideNavLink to="/#previously">Previously</SideNavLink>
                  <SideNavLink to="/ramblings">Blog</SideNavLink>
                  <SideNavLink to="/#testimonials">
                    Working with Leda
                  </SideNavLink>
                  <SideNavLink to="/#contact">Contact</SideNavLink>
                  <Button href="/resume.pdf" text="CV" />
                </SideNavigation>
              </Sidebar>
              <Backdrop style={isMenuOpen ? { display: "block" } : undefined} />
            </>
          )}
        </AnimatedLinks>
      </Header>
      <main>{children}</main>
      {showFooter && (
        <Footer>
          <LinkWrapper>
            <a aria-current="page" aria-label="home" href="/">
              <Logo>Leda Wolf</Logo>
            </a>
            <TopNavigation>
              <Link to="/privacy">Privacy</Link>
              <Link to="/imprint">Imprint</Link>
            </TopNavigation>
          </LinkWrapper>
        </Footer>
      )}
    </Frame>
  );
};

export default Layout;
