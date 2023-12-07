import React, {useState} from 'react';
import './Navbar.scss';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motiom} from 'framer-motion';

import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
      </div>
       </nav>
  )
}

export default Navbar