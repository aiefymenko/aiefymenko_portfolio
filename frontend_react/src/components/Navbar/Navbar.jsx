import React from 'react';
import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {
  let elements = ['home', 'about', 'work', 'skills', 'contact'];
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {elements.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
       </nav>
  )
}

export default Navbar