import React from 'react';
import './NavBarHeaderItem.css';

export default function NavBarHeaderItem(props) {
  return (
    <li className="NavBarHeaderItem">
      <a className="NavBarHeaderItem-link">{props.children}</a>
    </li>
  );
}
