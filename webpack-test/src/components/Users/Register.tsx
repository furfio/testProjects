import React, { useState } from "react";
import axios from "axios";
import { APIs } from "../../API/API";
import { message } from "antd";
import "./User.css";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        axios.post(APIs.register, {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
          })
          .then(function (response) {
            console.log(response);
            message.success("register successfully!");
          })
          .catch(function (error) {
            console.log(error);
            message.error("register failed");
          });
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        if(firstName === '' || lastName === '' || userName === '' || password === ''){
            message.info("can't be null");
            return;
        }
        register();
        setFirstName('');
        setLastName('');
        setUserName('');
        setPassword('');
    }

    const onChange1 = (e: any) => {
        setFirstName(e.target.value);
    }
    const onChange2 = (e: any) => {
        setLastName(e.target.value);
    }
    const onChange3 = (e: any) => {
        setUserName(e.target.value);
    }
    const onChange4 = (e: any) => {
        setPassword(e.target.value);
    }

    return(
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={firstName}
                        onChange={onChange1}
                        className="input"
                        placeholder="firstName"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={onChange2}
                        className="input"
                        placeholder="lastName"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        value={userName}
                        onChange={onChange3}
                        className="input"
                        placeholder="userName"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        value={password}
                        onChange={onChange4}
                        className="input"
                        placeholder="password"
                        autoComplete="off"
                    />
                    <button onClick={onSubmit}>register</button>
                </form>
            </div>
        </>
    )
}

export default Register;