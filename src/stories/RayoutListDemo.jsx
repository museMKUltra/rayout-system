import React from 'react';
import PropTypes from 'prop-types';
import RayoutList from '../components/RayoutList.jsx'

export const RayoutListDemo = ({
  backgroundColor,
  gap,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  horizontalAlign,
  ...props
}) => {
  return <RayoutList
    {...props}
    bg={backgroundColor}
    gridGap={gap}
    pt={`${paddingTop}px`}
    pb={`${paddingBottom}px`}
    pl={`${paddingLeft}px`}
    pr={`${paddingRight}px`}
    justifyContent={horizontalAlign === 'default' ? '' : horizontalAlign}
  >
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </RayoutList>
};

RayoutListDemo.propTypes = {
  backgroundColor: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  gap: PropTypes.number,
  horizontalAlign: PropTypes.oneOf(['default', 'start', 'center', 'end']),
};

RayoutListDemo.defaultProps = {
  backgroundColor: 'white',
  gap: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  horizontalAlign: 'default',
};
