import React, { type PropsWithChildren, useRef, useState } from "react";

import { Link as GatsbyLink } from "gatsby";

import styled from "styled-components";

import { useMediaQuery, useOnClickOutside } from "usehooks-ts";

import Animation from "components/base/Animation";
import Button from "components/base/Button";
import Burger from "components/svg/Burger";
import Wolf from "components/svg/Wolf";

import GlobalStyle from "../global-styles";

interface LayoutProperties {
  showFooter?: boolean;
}

const Frame = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;
  min-height: 100%;
`;

const Header = styled.header`
  align-items: center;
  background: var(--background-color);
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: var(--header-height);
  width: 100%;
  padding-bottom: 0.5rem;
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

  @media (max-width: 1030px) {
    padding-left: 0;
  }
`;

const Footer = styled.footer`
  background: var(--background-color);
  border-top: 3px solid var(--box-shadow-color);
`;

const Logo = styled.h2`
  font-size: 2rem;
  color: var(--primary-color);
`;

const Link = styled(GatsbyLink)`
  color: var(--primary-color);
  margin-right: 1rem;
  padding: 1rem 2rem;
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
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: var(--page-width);
  padding: var(--page-padding);
`;

const BurgerMenu = styled.button`
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
  padding: 2rem 1rem;
  text-align: center;
  font-size: large;
`;

const Layout: React.FC<PropsWithChildren<LayoutProperties>> = ({
  children,
  showFooter = true,
}) => {
  const [isMenuOpen, openMenu] = useState(false);
  const outsideReference = useRef(null);
  useOnClickOutside(outsideReference, () => {
    openMenu(false);
  });
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const smallScreen = useMediaQuery("(max-width: 1030px)");
  return (
    <Frame>
      <GlobalStyle colorMode={prefersDarkMode ? "dark" : "light"} />
      <Header>
        <AnimatedLinks duration={200} type="fadeDown">
          <a aria-current="page" aria-label="home" href="/">
            <Wolf height="7rem" mirror width="7rem" />
          </a>
          {smallScreen ? (
            <BurgerMenu
              aria-label="Open menu"
              id="openMenu"
              onClick={() => {
                openMenu(true);
              }}
              style={isMenuOpen ? { display: "none" } : undefined}
              type="button"
            >
              <Burger height="3rem" width="3rem" />
            </BurgerMenu>
          ) : (
            <TopNavigation>
              <Link to="/#who">Who?</Link>
              <Link to="/#previously">Previously</Link>
              <Link to="/ramblings">Blog</Link>
              <Link to="/#testimonials">Working with Leda</Link>
              <Link to="/#contact">Contact</Link>
              <Button href="/resume.pdf" text="CV" variant="primary" />
            </TopNavigation>
          )}
          {isMenuOpen && smallScreen && (
            <>
              <Sidebar
                aria-hidden={!isMenuOpen}
                style={
                  isMenuOpen
                    ? { transform: "translateX(0)", visibility: "visible" }
                    : undefined
                }
                tabIndex={isMenuOpen ? 1 : -1}
              >
                <SideNavigation ref={outsideReference}>
                  <SideNavLink to="/#who">Who?</SideNavLink>
                  <SideNavLink to="/#previously">Previously</SideNavLink>
                  <SideNavLink to="/ramblings">Blog</SideNavLink>
                  <SideNavLink to="/#testimonials">
                    Working with Leda
                  </SideNavLink>
                  <SideNavLink to="/#contact">Contact</SideNavLink>
                  <Button href="/resume.pdf" text="CV" variant="primary" />
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
            <a aria-current="page" aria-label="home" href="/#who">
              {smallScreen ? (
                <Wolf
                  fillColor="var(--primary-color)"
                  height="5rem"
                  mirror
                  width="5rem"
                />
              ) : (
                <Logo>Leda Wolf</Logo>
              )}
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
