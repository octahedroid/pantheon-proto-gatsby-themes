import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "./header";
import SEO from "./seo";
import Footer from "./footer";
import MobileMenu from "./mobile-menu";
import ThemeProvider from "./theme-provider";
import Navbar from "./navbar";
import theme from '../../theme';

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const mainMenu = [
  {
    name: "Home",
    route: "/",
    active: true
  },
  {
    name: "About",
    route: "/",
    active: false
  },
  {
    name: "Services",
    route: "/",
    active: false
  },
  {
    name: "Blog",
    route: "/",
    active: false
  },
  {
    name: "Contact",
    route: "/",
    active: false
  }
];

const footerMenu = [
  {
    title: "Menu",
    items: [
      {
        name: "Home",
        route: "/"
      },
      {
        name: "About",
        route: "/"
      },
      {
        name: "Services",
        route: "/"
      },
      {
        name: "Blog",
        route: "/blog"
      },
      {
        name: "Contact",
        route: "/"
      }
    ]
  },
  {
    title: "Links",
    items: [
      {
        name: "FAQ",
        route: "/"
      },
      {
        name: "Help",
        route: "/"
      },
      {
        name: "Support",
        route: "/"
      }
    ]
  },
  {
    title: "Legal",
    items: [
      {
        name: "Terms",
        route: "/"
      },
      {
        name: "Privacy",
        route: "/"
      }
    ]
  }
];

// Layout example of how to combine header, footer, mobile-menu & theme-provider in one component
// and pass props to the nedded components
// You need to pass your theme file to the ThemeProvider component
function Layout({ children, title }) {
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
      <div className="pt-5">
        <SEO title={title} />
        <Header
          scrolled={scrolledMenu}
          handleShowSidebar={handleShowSidebar}
          navegation={<Navbar navegation={mainMenu} />}
          branding={
            <>
              <svg
                className="h-6 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="rgb(0,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>{" "}
              Octahedroid
            </>
          }
        />
        <MobileMenu
          showSidebar={showSidebar}
          handleShowSidebar={handleShowSidebar}
          navegation={mainMenu}
        />
        {children}
        <Footer
          branding={
            <React.Fragment>
              <svg
                className="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                  fill="rgb(0,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>{" "}
              Octahedroid
            </React.Fragment>
          }
          navegation={footerMenu}
          socialNetworks={[
            {
              icon: <FaGithub />,
              link: ""
            },
            {
              icon: <FaTwitter />,
              link: ""
            },
            {
              icon: <FaLinkedin />,
              link: ""
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
