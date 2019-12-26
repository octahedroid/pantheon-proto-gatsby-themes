import React from "react";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import SocialLinks from './social-links';


// no branding elastic menu

const Footer = ({navegation, socialNetworks, branding}) => {
  
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-3 py-4 lg:py-6">
        <div className="w-full flex flex-col md:flex-row flex-wrap items-start">
          <div className="w-full md:w-1/2 lg:w-1/5 px-4 md:order-1 mb-3 lg:mb-0 flex justify-center lg:justify-start">
            <Link
              className="inline-block text-primary no-underline hover:no-underline font-bold text-2xl"
              to="/"
            >
              {branding}
            </Link>
          </div>
          {navegation &&
            navegation.map(menu => (
              <div className="w-full md:w-full lg:w-1/5 px-2 md:order-3">
                <p className="uppercase text-secondary font-bold md:mb-3">{menu.title}</p>
                <ul className="list-reset mb-3 text-white ">
                {menu.items &&
                  menu.items.map(item => (
                    <li className="mt-2 inline-block mr-2 lg:block lg:mr-0  no-underline hover:underline">
                      <a
                        href={item.route}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  
                </ul>
              </div>
            ))}
          <div className="w-full md:w-1/2 lg:w-1/5 px-2 md:order-2 lg:order-4 mt-3 md:mt-0">
            <SocialLinks
              items={socialNetworks}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  socialNetworks: PropTypes.array,
};

export default Footer;
