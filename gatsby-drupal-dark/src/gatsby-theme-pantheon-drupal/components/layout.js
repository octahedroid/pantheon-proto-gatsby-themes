import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import Header from "gatsby-theme-pantheon-core/src/components/header";
import SEO from "gatsby-theme-pantheon-core/src/components/seo";
import MobileMenu from "gatsby-theme-pantheon-core/src/components/mobile-menu";
import ThemeProvider from "gatsby-theme-pantheon-core/src/components/theme-provider";
import Footer from "gatsby-theme-pantheon-core/src/components/footer";
import theme from "../../../theme";
import { FaHandsHelping } from "react-icons/fa";

const mainMenu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
];


// Layout example of how to combine header, footer, mobile-menu & theme-provider in one component
// and pass props to the nedded components
// You need to pass your theme file to the ThemeProvider component
function Layout({ children, title, sitename }) {
  const [scrolledMenu, setScrolledMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
  }, []);

  const handleScroll = event => {
    var target = event.target || event.srcElement;
    setScrolledMenu(target.scrollingElement.scrollTop > 30);
  };
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-5 bg-white">
        <SEO title={title} />
        <Header scrolled={scrolledMenu}>
          { sitename &&
            <Header.Branding>
              <FaHandsHelping className="mr-2" /> { sitename }
            </Header.Branding>
          }
          <Header.Navbar handleShowSidebar={handleShowSidebar}>
            {mainMenu &&
              mainMenu.map(item => (
                <Header.MenuItem to={item.to} active={item.active}>
                  {item.name}
                </Header.MenuItem>
              ))}
          </Header.Navbar>
        </Header>
        <MobileMenu
          showSidebar={showSidebar}
          handleShowSidebar={handleShowSidebar}
        >
          <MobileMenu.Navegation>
          {mainMenu &&
            mainMenu.map(item => (
              <MobileMenu.Item active={item.active}>
                <MobileMenu.Link to={item.to} active={item.active}  >
                  {item.name}
                </MobileMenu.Link>
              </MobileMenu.Item>
            ))}
          </MobileMenu.Navegation>
        </MobileMenu>
        {children}
        <Footer bg="white">
          <Footer.Navegation center>
            {mainMenu &&
              mainMenu.map(item => (
                <Footer.Item active={item.active}>
                  <Footer.Link to={item.to} active={item.active} className="text-black">
                    {item.name}
                  </Footer.Link>
                </Footer.Item>
              ))}
          </Footer.Navegation>
        </Footer>
      </div>
    </ThemeProvider>
  );
}
Layout.Container = props =>(<div className={cx("container mx-auto pt-5 pb-4", props.className, {
  "flex flex-wrap": props.flex
})}>{props.children}</div>)
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
