import React, { useState } from "react";
import "../../amazon-logo.png";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../firebaseF/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function Register() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      resetFormFields();
    } catch (error) {}
  };

  return <div></div>;
}
