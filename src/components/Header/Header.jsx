import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { motion } from "framer-motion";
import { auth } from "../../config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user] = useAuthState(auth);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const isHomepage = location.pathname === "/";
  const isMap = location.pathname === "/map-reservation";
  const isReservation = location.pathname === "/personal-reservations";
  const isProfile = location.pathname === "/profile";

  const buttonVariants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.1,
      opacity: 0.9,
    },
    tap: {
      scale: 0.9,
      opacity: 1,
    },
  };

  return (
    <div className="header-conatiner">
      <div className="menu-btn-h">
        <HiMenuAlt4
          className={`menu-logo-h ${menuOpen ? "open-h" : "close-h"}`}
          onClick={toggleMenu}
        />
        {menuOpen && (
          <div className="menu-div-container">
            <Link
              className={`text-md-link ${isHomepage ? "selected-link" : ""}`}
              to={`/`}
            >
              Homepage
            </Link>
            <Link
              className={`text-md-link ${isMap ? "selected-link" : ""}`}
              to={`/map-reservation`}
            >
              Reserve
            </Link>
            <Link
              className={`text-md-link ${isReservation ? "selected-link" : ""}`}
              to={`/personal-reservations`}
            >
              Reservations
            </Link>
            <Link
              className={`text-md-link ${isProfile ? "selected-link" : ""}`}
              to={`/profile`}
            >
              Profile
            </Link>
          </div>
        )}
      </div>
      <div className="logo-h-container">
        <h2 className="re-logo-h">RE:</h2>
        <h2 className="serve-logo-h">serve</h2>
      </div>
      <div className="account-btns-h">
        {user ? (
          <div className="accounts-welcome-user">
            <div className="text-loggedin">
              <p>Welcome,</p>
              <span>
                {`${user.displayName ? user.displayName : user.email}!`}
              </span>
            </div>
            <motion.button
              className="logout-a-btn"
              onClick={() => signOut(auth)}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <BiLogOut className="signout-btn"/>
            </motion.button>
          </div>
        ) : (
          <>
            <motion.button
              className="login-a-btn a-btn"
              onClick={() => navigate("/login")}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Log in
            </motion.button>
            <motion.button
              className="signup-a-btn a-btn"
              onClick={() => navigate("/signup")}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Sign up
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
