import React, { useState } from "react";
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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

  return (
    <div className="signin-container">
      <form onSubmit={handleSignup} className="signin-form">
        <h2>signup with your email</h2>
        <div className="su-form-group">
          <input
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="Enter your eamil"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>
       Already have an account?{" "}
        <span className="su-form-link" onClick={() => navigate("/login")}>
          Log in
        </span>
      </p>
    </div>
  );
}

export default SignUp;
