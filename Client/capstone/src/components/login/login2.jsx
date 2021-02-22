import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL, API_LOGIN_URL} from '../../api/api.js';
import { Router } from 'express';
import { Route } from 'react-router-dom';



function Login (event) { //from tutorial: https://github.com/vnovick/graphql-jwt-tutorial/blob/master/nextjsapp/pages/login.js this is our base_URL

    const [login, setLogin] = useState({ email: '', password: '', error: '' });


    const handleChange = (event) => {
        let n = event.target.name;
        setLogin(login => ({...login,
            [n]: event.target.value,
        }))
        console.log(n, event.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const newurl = API_LOGIN_URL+'login';
        axios({
            method: 'post',
            url: newurl,
            data: {
                password: login.password,
                email: login.email
            }
        })
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
            sessionStorage.setItem('sessionId', response.data);
          //put in redirect here
           Route.push('/landing');
            } else
                console.log('Login failed.')

                //error message that username and password is bad or whatever else comes back from the server
        }, (error) => {
        console.log(error);
        })
    };   

     
       


    return (
            <div className = "loginInfo">
                <form className = "form-login form-floating" onSubmit={Login}> //changed from handleLogin
                    <label htmlFor = "loginEmail">Email</label>
                    <input
                        type = "text"
                        id = "loginEmail"
                        name = 'email'
                        className = "form-control text-box"
                        value={login.email}
                        onChange={handleChange}
                    >

                    </input>
                    <label htmlFor = "loginPassword">Password</label>
                    <input
                        type = "text"
                        id = "loginPassword"
                        name = 'password'
                        className = "form-control text-box"
                        value={login.password}
                        onChange={handleChange}
                    >

                    </input>
                    <button type="submit" className="btn btn-lg btn-success btn-block">Login</button>
                </form>
            </div>
    )
}


export default Login;