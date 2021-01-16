import React from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { startGoogleLogin, startRegisterWithEmailPasswordName } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "Andres",
        email: "",
        password: "",
        confirm: ""
    });

    const {name, email, password, confirm} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirm);
        if(isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        } 
    }

    const isFormValid = () => {

        if(name.trim().length === 0) {
            dispatch(setError("Name is required"))
            return false;
        } else if(!validator.isEmail(email)){
            dispatch(setError("Email is no valid"))
            return false;
        } else if(password !== confirm){
            dispatch(setError("Password no mach with other password"))
            return false;
        } else if(password.length <= 5){
            dispatch(setError("Password need 6 characters"))
            return false;
        }

        dispatch(removeError())
        return true;
    }



    return (
        <div className="login-screen">
            <h3>Register</h3>

            <form onSubmit={handleRegister}>

                {   
                    msgError && (
                        <div className="error">
                            {msgError}
                        </div>
                    )
                }


                <input type="text" placeholder="Name" value={name} onChange={handleInputChange} name="name" autoComplete="off" />
                <input type="email" placeholder="Email" value={email} onChange={handleInputChange}  name="email" autoComplete="off" />
                <input type="password" placeholder="Password" value={password} onChange={handleInputChange} name="password"/>
                <input type="password" placeholder="Password" value={confirm} onChange={handleInputChange} name="confirm"/>

                <Link className="register-link" to="/auth/login">Already Registered?</Link>

                <input className="btn" type="submit" value="Register"/>
            </form>

            
        </div>
    )
}
