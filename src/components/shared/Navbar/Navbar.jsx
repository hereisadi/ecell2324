import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi"
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../../../assets/ecell-logo-bw2.png'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const changeToggle = () => {
    if (window.scrollY >= 90 && window.innerWidth > 768) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeToggle);


  return (
    <nav className={toggle ? 'navbar1 expanded' : 'navbar1'} style={{ userSelect: 'none' }}>
      {/* <Link to="/">
      
        <img className='brand-logo logo' src={navlogo} alt="ecell-logo-bw2" />
      </Link> */}

      <NavLink to="" exact activeClassName="selected">
        <img className='brand-logo logo' src={navlogo} alt="ecell-logo-bw2" />
      </NavLink>


      <div className='toggle-icon' onClick={handleToggle}>
        {toggle ? <ImCross size={20} /> : <GiHamburgerMenu size={25} />}
      </div>
      <ul className='links-nav'>
        {/* <li><Link to="/#about">ABOUT</Link></li> */}
        <li>     <NavLink to="/" exact activeClassName="selected">HOME</NavLink></li>
        <li>     <NavLink to="/#about" exact activeClassName="selected">ABOUT</NavLink></li>

        {/* <li><Link to="/#events">EVENTS</Link></li> */}
        <li>     <NavLink to="/#events" exact activeClassName="selected">EVENTS</NavLink></li>
        <li><a href="https://srijan-nits.in/" rel="noreferrer" target="_blank">SRIJAN</a></li>
        {/* <li><Link to="/team">OUR TEAM</Link></li> */}

        <li>     <NavLink to="/team" exact activeClassName="selected">OUR TEAM</NavLink></li>
        {/* <li><Link to="/gallery">GALLERY</Link></li> */}

        <li><NavLink to="/gallery" exact activeClassName="selected">GALLERY</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar;