import React, { useState } from 'react';
import axios from 'axios';
import {API_BASE_URL, API_LOGIN_URL} from '../../api/api.js';


function Login (event) {
    const [login, setLogin] = useState({ email: '', password: '' });
        function getUser(){
            const newurl = API_BASE_URL;
            axios({
                method: 'get',
                url: newurl
            }).then((res) => {
                res.data.forEach(user => {
                    if(login.email === user.email){
                        event.setCurrentUser(user._id);                                                
                    }
                });
                console.log(res.data);
            })
            console.log('getUser() Called')
        }


    const handleChange = (event) => {
        let data = event.target.name;
        setLogin(login => ({...login,
            [event.target.name]: event.target.value
        }))
        console.log(login);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const newurl = API_LOGIN_URL + 'login';
        axios({
            method: 'post',
            url: newurl,
            data: {
                password: login.password,
                email: login.email
            }
        })
        .then((response) => {
            // console.log(response);
            if (response.status === 200) {
                sessionStorage.setItem('sessionId', response.data);
            }
            getUser();
            //console.log(sessionStorage)
        });
    }
    return(
        <div>
            <h1>Login</h1>
            <form className = "login-form" onSubmit = {handleLogin}>
                <label htmlFor = "loginEmail">Email</label>
                <input 
                    type = "text"
                    id = "loginEmail"
                    name = "email"
                    className = "form-control text-box"
                    value = {login.email}
                    onChange = {handleChange}
                >

                </input>
                <label htmlFor = "passwordLogin">Password</label>
                <input
                    type = "text"
                    id = "loginPassword"
                    name = "password"
                    className = "form-control text-box"
                    value = {login.password}
                    onChange = {handleChange}
                >

                </input>
                <button type = "submit" className = "loginButton" onSubmit = {handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;