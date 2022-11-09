import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../firebaseF/firebase";
import { Link } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else {
        alert("Incorrect Email");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
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
        <form onSubmit={handleSubmitForm}>
          <input
            className="login-input"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email here"
            value={email}
            required
          />
          <input
            required
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className="login-button">Sign In</button>

          <input
            onClick={logGoogleUser}
            className="login-button"
            type="button"
            value="Sign In with Google"
          />
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign up!</Link>
        </p>
      </div>
      <div classname="blank-space"></div>
    </div>
  );
}
