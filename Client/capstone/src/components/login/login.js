import React, { useState } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../api/api.js';


function Login (props) {
    //i need a function for login
    //i need to handle change of info in the email and password form
    //i need to handle the submit of data in the form field
    const [login, setLogin] = useState()

    const handleChange = (event) => {
        let data = event.target.name;
        setLogin(login => ({...login,
            [data]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL;
        axios({
            method: 'post',
            url: newurl,
            data: {
                password: login.password,
                email: login.email
            }
        })
    }
    return(
        <div>
            <form className = "login-form">
                <label htmlFor = "nameLogin">Email</label>
                <input 
                    type = "text"
                    id = "loginName"
                    name = "login"
                    className = "form-control text-box"
                    value = {login.email}
                    onChange = {handleChange}
                >

                </input>
                <label htmlfor = "passwordLogin">Password</label>
                <input
                    type = "text"
                    id = "loginPassword"
                    name = "password"
                    className = "form-control text-box"
                >

                </input>
                <button type = "submit" className = "loginButton" onChange = {handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login;