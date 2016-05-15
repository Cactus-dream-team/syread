import React from 'react'
import { Link } from 'react-router'
import home from '../img/home.png'
import aa from '../img/aa.png'
import mark from '../img/mark.png'
import sy from '../img/syread.png'
const Header = () => (
  <header className="navigation">
    <img className="logotype" src={sy} />
      <nav className="btn-icons">
        <li><Link to="/"><img src={home} /></Link></li>
        <li><a href="#"><img src={aa} /></a></li>
        <li><a href="#"><img src={mark} /></a></li>
      </nav>
  </header>
);
export default Header;
