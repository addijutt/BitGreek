import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  const [stickyClass, setStickyClass] = useState('relative');
  const homeNav = () => {
    if (document.body.classList.contains('home-sm')) {
      document.body.classList.remove('home-sm');
    } else {
      document.body.classList.add('home-sm');
    }
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass('bg-pink') : setStickyClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  return (
    <div>
      
      <nav
        className={`navbar navbar-expand-lg flex-column transition-all pt-lg-2 ${stickyClass}`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="assets/logo.png" className="light-logo" alt="" />
          </Link>
          <div className="d-lg-none d-inline-flex gap-2 align-items-center">
            <button className="navbar-toggler" type="button" onClick={() => {homeNav();}}>
              <img src="assets/menu.svg" className="" alt="" />
            </button>
          </div>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="d-lg-none d-flex justify-content-between text-end p-4">
              <Link to="/" className="navbar-brand">
                <img src="assets/logo.png" className='light-logo' alt="" />
              </Link>
              <a href="javascript:void(0)" onClick={() => {homeNav();}} className="cross-btn">
                <span className="iconify" data-icon="akar-icons:cross"></span>
              </a>
            </div>
            <ul className="navbar-nav align-items-center mx-auto px-4 pe-lg-5">
              <li className="nav-item"> <a  href="#home" className="nav-link" onClick={() => {homeNav();}}>Home</a> </li>
              <li className="nav-item"> <a  href="#news" className="nav-link" onClick={() => {homeNav();}}>News</a> </li>
              <li className="nav-item"> <a  href="#prices" className="nav-link" onClick={() => {homeNav();}}>Prices</a> </li>
              <li className="nav-item"> <a  href="#contact" className="nav-link" onClick={() => {homeNav();}}>Contact</a> </li>
            </ul>
            <div className="d-flex pt-lg-0 pt-5 px-4 px-md-0">
              <a href="https://app.stratodex.io/" target={'_blank'} className="primary-btn">Buy Now</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
