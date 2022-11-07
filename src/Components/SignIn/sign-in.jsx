import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../firebaseF/firebase";
import { Link } from "react-router-dom";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div className="signin-container">
      <div classname="blank-space"></div>
      <div className="sign-in">
        <Link to="/">
          <img
            classname="login-logo"
            src={require("../../amazon-logo.png")}
            height="100px"
            width="300px"
          />
        </Link>
        <h1 className="login-title">Sign In</h1>
        <input className="login-input" type="email" placeholder="Email here" />
        <input className="login-input" type="password" placeholder="Password" />
        <input className="login-button" type="submit" value="Sign In" />
        <input
          onClick={logGoogleUser}
          className="login-button"
          type="submit"
          value="Sign In with Google"
        />
        <p>
          Don't have an account? <Link to="/register">Sign up!</Link>
        </p>
      </div>
      <div classname="blank-space"></div>
    </div>
  );
}
