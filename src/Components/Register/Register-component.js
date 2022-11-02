import React from "react";
import '../../amazon-logo.png'
import { Link } from "react-router-dom";

export default function Register (){
    return(<div>
        <div className="register-container">
            <Link to='/'><img classname='register-logo'  src={require("../../amazon-logo.png")} height='100px' width='300px' /></Link>
                    <h1>Create Account</h1>
                    <input className="register-input" type='text' placeholder="First and last name" />
                    <input className="register-input" type='email' placeholder='Email here' />
                    <input className="register-input" type='password' placeholder='Password' />
                    <input className="register-input" type='password' placeholder='Confirm password' />
                    <input className="amazon-button" type='submit' value='Continue' />
                </div>
        
        <footer className='a-footer'>© 1996-2022, Amazon.com, Inc. or its affiliates</footer>
</div>
    )
}