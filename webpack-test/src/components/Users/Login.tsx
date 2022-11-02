import React, { useState } from "react";
import axios from "axios";
import { APIs } from "../../API/API";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import { RouterPath } from "../../router/router";
import "./User.css";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const goto = (url: string) => {
      navigate(url);
    };

    const register = () => {
        axios.post(APIs.login, {
            userName: userName,
            password: password
        })
            .then(function (response) {
                console.log(response);
                message.success("login successfully!");
                goto(RouterPath.Home);
            })
            .catch(function (error) {
                console.log(error);
                message.error("register failed");
            });
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (userName === '' || password === '') {
            message.info("can't be null");
            return;
        }
        register();
        setUserName('');
        setPassword('');
    }

    const onChange1 = (e: any) => {
        setUserName(e.target.value);
    }
    const onChange2 = (e: any) => {
        setPassword(e.target.value);
    }
    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={userName}
                        onChange={onChange1}
                        className="input"
                        placeholder="userName"
                        autoComplete="off"
                    />
                    <input
                        type="text"
                        value={password}
                        onChange={onChange2}
                        className="input"
                        placeholder="password"
                        autoComplete="off"
                    />
                    <button onClick={onSubmit}>login</button>
                </form>
            </div>
        </>
    )
}

export default Login;