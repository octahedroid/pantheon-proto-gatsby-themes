import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import cx from 'classnames'

const StyledHeading = props => {
  const themeStyleHeadings = {
    h1:  (props) => <Styled.h1 {...props} />,
    h2:  (props) => <Styled.h2 {...props} />,
    h3:  (props) => <Styled.h3 {...props} />,
    h4:  (props) => <Styled.h4 {...props} />,
    h5:  (props) => <Styled.h5 {...props} />,
    h6:  (props) => <Styled.h6 {...props} />,
  }
  const TagStyled = themeStyleHeadings[props.tag];
  if (!props.id) return <TagStyled {...props}>{props.children}</TagStyled>
  return (<TagStyled {...props}>
      <a
        href={`#${props.id}`}>
        {props.children}
      </a>
    </TagStyled>
  )
}
// font-alternative font-bold text-4xl leading-snug lg:text-5xl text-black mb-2 lg:mb-3 text-center font-sans font-alternative font-serif text-primary text-secondary text-darkShade text-accent text-lightShade
const Title = ({ as, font, color, big, centered, children, className }) => {
  return (<>
    {as&&!big&&<StyledHeading tag={as} 
    className={cx(className, {
      "text-center": centered, 
      [`font-${font}`]: font,
      [`text-${color}`]: color
    })
    }>{children}</StyledHeading>}
    {big&&<h1
      className={cx('font-alternative font-bold text-4xl leading-snug lg:text-5xl text-black mb-2 lg:mb-3', {'text-center':centered})}
    >
      {children}
    </h1>}
  </>)
};

Title.propTypes = {
  big: PropTypes.bool,
  className: PropTypes.string
};

Title.defaultProps = {
  font: 'sans',
  color: 'black'
};

export default Title;
