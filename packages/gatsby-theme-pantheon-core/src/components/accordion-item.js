import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";

/** @jsx jsx */
import { jsx } from "theme-ui";

export default class AccordionItem extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.children,
  }

  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };
  }

  render() {
    const { heading, children } = this.props;
    const { opened } = this.state;

    return (
      <div className="py-3 border-t border-gray-300">
        <div className="flex items-center leading-tight text-2xl font-bold text-gray-500 cursor-pointer"
          onClick={() => this.setState({ opened: !opened }) }
        >
          <div className="flex-1">{ heading }</div>
          <FaAngleDown
            sx={{
              transition: 'transform 0.3s ease-in-out',
              transform: `rotate(${ opened ? 180 : 0 }deg)`
            }}
          />
        </div>
        <div
          sx={{
            transition: `max-height ${ opened ? '1.5s' : '.2s' }`,
            maxHeight: opened ? '100rem' : '0',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <div className="text-xl mt-3"
            sx={{
              transition: 'opacity 0.5s, transform 0.5s',
              transitionDelay: opened ? '.2s' : '.5s',
              opacity: opened ? 1 : 0,
              transform: `translateY(${ opened ? 0 : '-1rem' })`
            }}
          >
            { children }
          </div>
        </div>
      </div>
    );
  }
}
