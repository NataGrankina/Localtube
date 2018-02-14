import React from 'react';
import './NavBarHeader.css';

export default function NavBarHeader(props) {
  return <ul className="NavBarHeader">{props.children}</ul>;
}
