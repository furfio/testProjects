import React from "react";
import { Routes, Route } from "react-router-dom"
import LeftNavi from "./components/navi/Navi";
import { RouterPath } from "./router/router";
import Todo from "./Pages/Test/Todo/Todo";
import Faq from "./Pages/Test/Faq/Faq";
import Home from "./Pages/Home/Home";
import Counter from "./Pages/Test/Counter/Counter";
import Map from "./Pages/Test/Map/Map";
import Header from "./components/Head/Header";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import "./static/css/App.css";

const App = () => {
    return (
        <div>
            <div className="Header">
                <Header />
            </div>
            <div>
                <div className="Navi">
                    <LeftNavi />
                </div>
                <div className="main">
                    <Routes>
                        <Route path={RouterPath.Home} element={<Home />} />
                        <Route path={RouterPath.Login} element={<Login />} />
                        <Route path={RouterPath.Register} element={<Register />} />
                        <Route path={RouterPath.Todo} element={<Todo />} />
                        <Route path={RouterPath.Faq} element={<Faq />} />
                        <Route path={RouterPath.Counter} element={<Counter />} />
                        <Route path={RouterPath.Map} element={<Map />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;