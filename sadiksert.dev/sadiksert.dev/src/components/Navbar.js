import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <a href="." className="logo-link">
          <span className="logo-part1">sadiksert</span>
          <span className="logo-part2">.dev</span>
        </a>
      </div>
      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu}>Ben</ScrollLink></li>
          <li><ScrollLink to="skills" smooth={true} duration={500} onClick={toggleMenu}>Becerilerim</ScrollLink></li>
        
          <li><ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>İletişim</ScrollLink></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>
    </header>
  );
};

export default Navbar;
