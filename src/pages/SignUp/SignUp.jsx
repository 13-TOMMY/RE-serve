import React, { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NeonTilt from "../../components/NeonTilt/NeonTilt";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, { displayName: name });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

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
    <div className="signup-container">
      <div className="signup-left">
        <div className="left-container-su">
            <h2>Sign up with your email</h2>
          <form onSubmit={handleSignup} className="signup-form">
            <div className="su-form-group">
              <input
                type="text"
                className="su-form"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                className="su-form"
                placeholder="Enter your eamil"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                className="su-form"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <motion.button
              className="su-form-btn"
              type="submit"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Sign up
            </motion.button>
          </form>
          <p className="su-last-p">
            Already have an account?{" "}
            <span className="su-form-link" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </div>
      </div>
      <div className="signup-right">
        <NeonTilt className="neon-tilt-su"/>
      </div>
    </div>
  );
}

export default SignUp;
