import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const isHomepage = location.pathname === '/';
  const isMap = location.pathname === '/map-reservation';
  const isReservation = location.pathname === '/personal-reservations';
  const isProfile = location.pathname === '/profile';

  return (
    <div className='header-conatiner'>
      <div className='menu-btn-h'>
        <HiMenuAlt4 className={`menu-logo-h ${menuOpen ? 'open-h' : 'close-h'}`} onClick={toggleMenu} />
        {/* Custom div for menu */}
        {menuOpen && (
          <div className="menu-div-container">
            <Link className={`text-md-link ${isHomepage ? 'selected-link' : ''}`} to={`/`}>Homepage</Link>
            <Link className={`text-md-link ${isMap ? 'selected-link' : ''}`} to={`/map-reservation`}>Reserve</Link>
            <Link className={`text-md-link ${isReservation ? 'selected-link' : ''}`} to={`/personal-reservations`}>Reservations</Link>
            <Link className={`text-md-link ${isProfile ? 'selected-link' : ''}`} to={`/profile`}>Profile</Link>
          </div>
        )}
      </div>
      <div className="logo-h-container">
        <h1 className='re-logo-h'>RE:</h1>
        <h2 className='serve-logo-h'>serve</h2>
      </div>
      <div className='account-btns-h'>
        <button className='login-a-btn a-btn' onClick={() => navigate("/login")}>Log in</button>
        <button className='signup-a-btn a-btn' onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
