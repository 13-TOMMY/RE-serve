import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { HiMenuAlt4 } from 'react-icons/hi';
import { BsFillPersonFill } from 'react-icons/bs';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuModal, setMenuModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);

  const toggleMenuModal = () => {
    setMenuModal((prevMenuModal) => !prevMenuModal);
  };
  const toggleAccountModal = () => {
    setAccountModal((prevAccountModal) => !prevAccountModal);
  };

  // Check if the current page is the homepage
  const isHomepage = location.pathname === '/';
  const isMap = location.pathname === '/map-reservation';
  const isReservation = location.pathname === '/personal-reservations';
  const isProfile = location.pathname === '/profile';

  return (
    /* h stands for header */
    /* mm stands for menu modal */
    /* am stands for account modal */
    <div className='header-conatiner'>
      <HiMenuAlt4 className='menu-logo-h' onClick={toggleMenuModal} />
      <div className="logo-h-container">
        <h1 className='re-logo-h'>RE:</h1>
        <h2 className='serve-logo-h'>serve</h2>
      </div>
      <BsFillPersonFill className='account-logo-h' onClick={toggleAccountModal} />

      <Modal
        isOpen={menuModal}
        onRequestClose={toggleMenuModal}
        ariaHideApp={false}
        className="menu-modal-container"
        overlayClassName="modal-modal-background"
      >
        <div className="link-mm-container">
          {/* Apply the 'homepage-link' class if it's the homepage */}
          <Link className={`hp-mm-link text-mm-link ${isHomepage ? 'selected-link' : ''}`} to={`/`}>Homepage</Link>
          <Link className={`mr-mm-link text-mm-link ${isMap ? 'selected-link' : ''}`} to={`/map-reservation`}>Reserve</Link>
          <Link className={`pr-mm-link text-mm-link ${isReservation ? 'selected-link' : ''}`} to={`/personal-reservations`}>Reservations</Link>
          <Link className={`p-mm-link text-mm-link ${isProfile ? 'selected-link' : ''}`} to={`/profile`}>Profile</Link>
        </div>
      </Modal>

      <Modal
        isOpen={accountModal}
        onRequestClose={toggleAccountModal}
        ariaHideApp={false}
        className="account-modal-container"
        overlayClassName="account-modal-background"
      >
        <div className="am-btn-container">
          <button className='login-am-btn am-btn' onClick={() => navigate("/login")}>LOG IN</button>
          <button className='signup-am-btn am-btn' onClick={() => navigate("/signup")}>SIGN UP</button>
        </div>
      </Modal>

    </div>
  );
}

export default Header;
