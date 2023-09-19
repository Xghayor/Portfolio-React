import React from 'react';
import { Link } from 'react-router-dom';
import siteLogo from './assets/site_logo.png';

const Header = () => {
  return (
    <header className="site_container">
      <nav>
        <div className="site_logo">
          <Link to="/"> 
            <img src={siteLogo} alt="site logo" />
          </Link>
        </div>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link> 
          </li>
          <li>
          <a href="#work-section">Work</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="site_btn">
          <a href="/contact"><span></span>Let's Work Together</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
