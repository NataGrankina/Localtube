import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

export default function Button(props) {
  const {
    className, isToggled, children, ...restProps
  } = props;

  const buttonClass = classNames('Button', className, {
    'Button-togled': isToggled
  });

  return (
    <button className={buttonClass} {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  isToggled: PropTypes.bool
};

Button.defaultProps = {
  isToggled: false
};
