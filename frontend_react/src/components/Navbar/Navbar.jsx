import React from 'react';
import './Navbar.scss';

import { images } from '../../constants';

const Navbar = () => {
  let elements = ['home', 'about', 'work', 'skills', 'contact'];
  return (
    <nav>
      <div>
        <img src={images.logo} alt='logo' />
      </div>
      <ul>
        {elements.map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
       </nav>
  )
}

export default Navbar