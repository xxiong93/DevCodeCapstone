import React, { useState } from 'react';
import axios from 'axios';
import {API_BASE_URL, API_LOGIN_URL} from '../../api/api.js';


function Login (event) {
    //i need a function for login
    //i need to handle change of info in the email and password form
    //i need to handle the submit of data in the form field
    const [login, setLogin] = useState({ email: '', password: '' });
    //i  need a function that will retrieve the user's info from server
        //this would be an axios get request
        //i need to get the user's username and password
        function getUser(){
            const newurl = API_BASE_URL;
            axios({
                method: 'get',
                url: newurl
            }).then((res) => {
                // res.data.forEach(user => {
                //     if(login.email === user.email){
                //         event.setCurrentUser(user._id);                                                
                //     }
                // });
                console.log(res.data);
            })
            console.log('getUser() Called')
        }


    const handleChange = (event) => {
        let data = event.target.name;
        setLogin(login => ({...login,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
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
            <form className = "login-form" onSubmit = {handleSubmit}>
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
                <button type = "submit" className = "loginButton" onSubmit = {handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Login;