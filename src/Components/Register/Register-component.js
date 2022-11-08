import React, { useState } from "react";
import "../../amazon-logo.png";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebaseF/firebase";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const handleChangeForms = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { name });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email in use");
      }
      console.log(error, "error here");
    }
  };

  return (
    <div>
      <div className="register-container">
        <Link to="/">
          <img
            classname="register-logo"
            src={require("../../amazon-logo.png")}
            height="100px"
            width="300px"
          />
        </Link>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmitForm}>
          <label>Your Name</label>
          <input
            required
            className="register-input"
            type="text"
            placeholder="First and last name"
            name="name"
            value={name}
            onChange={handleChangeForms}
          />
          <label>Email</label>
          <input
            required
            className="register-input"
            type="email"
            placeholder="Email here"
            name="email"
            value={email}
            onChange={handleChangeForms}
          />
          <label>Password</label>
          <input
            required
            className="register-input"
            type="password"
            placeholder="At least 6 characters"
            name="password"
            value={password}
            onChange={handleChangeForms}
          />
          <label>Re-Enter Password</label>
          <input
            required
            className="register-input"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeForms}
          />
          <input className="amazon-button" type="submit" value="Continue" />
        </form>
      </div>

      <footer className="a-footer">
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </footer>
    </div>
  );
}
