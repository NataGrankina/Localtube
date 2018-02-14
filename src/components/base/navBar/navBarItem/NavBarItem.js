import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './NavBarItem.css';

export default function NavBarItem(props) {
  const itemClasses = classNames({
    NavBarItem: true,
    'NavBarItem-pullRight': props.pullRight
  });

  const isClickable = !!props.onClick;
  const itemContent = isClickable ? (
    <a className="NavBarItem-link" onClick={props.onClick}>
      {props.children}
    </a>
  ) : (
    <div className="NavBarItem-text">{props.children}</div>
  );

  return <li className={itemClasses}>{itemContent}</li>;
}

NavBarItem.propTypes = {
  pullRight: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

NavBarItem.defaultProps = {
  pullRight: false
};
