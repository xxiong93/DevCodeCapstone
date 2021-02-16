import React, { useState }from 'react';
import {API_BASE_URL} from '../../api/api.js';
import axios from 'axios';


function Register(props) {    
    const [register, setRegister] = useState({
        userName: "",
        password: "",
        email: "",
    });
    
    function getCurrentUser(){
        const newurl = API_BASE_URL;
        axios({
            method: 'get',
            url: newurl,
        }).then((response) => {
            if(response.email === register.email){
                props.setCurrentUser(response._id)            
            }
        })
    }

    const handleChange = (event) => {
        let n = event.target.name;
        setRegister(register => ({...register,
            [n]: event.target.value,
        }))
        //console.log(n, event.target.value)
    }
    
    const handleRegister = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL+'new';
        
        axios({
            method: 'post',
            url: newurl,
            data: {
                userName: register.userName,
                password: register.password,
                email: register.email
            }
        }).then(() => {
            getCurrentUser();
        })
    }
        return (            
            <div className = "registerInfo">
              <div>
                <h1 className = "registerTitle" >Register</h1>
              </div>
                <form className = "form-register form-floating" onSubmit={handleRegister}>
                    <label htmlFor = "registerName">Name </label>
                    <input 
                        type = "text" 
                        id = "registerName" 
                        name = 'userName'  
                        className = "form-control text-box"
                        value={register.name}
                        onChange={handleChange}
                    >
        
                    </input>
                    <label htmlFor = "registerEmail">Email</label>
                    <input 
                        type = "text" 
                        id = "registerEmail" 
                        name = 'email'  
                        className = "form-control text-box"
                        value={register.email}
                        onChange={handleChange}
                    >
                    </input>
                    <label htmlFor = "registerPassword">Password</label>
                    <input 
                        type = "text" 
                        id = "registerPassword" 
                        name = 'password'  
                        className = "form-control text-box"
                        value={register.password}
                        onChange={handleChange}
                    >
        
                    </input>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Register</button>
                </form>
            </div>
        )
        

    }
export default Register;