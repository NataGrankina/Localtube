import React from 'react';
import './NavBar.css';

export default function NavBar(props) {
  return <ul className="NavBar">{props.children}</ul>;
}
