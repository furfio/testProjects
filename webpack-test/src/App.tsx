import React from "react";
import { Routes, Route } from "react-router-dom"
import LeftNavi from "./components/navi/Navi";
import { RouterPath } from "./router/router";
import Todo from "./Pages/Test/Todo/Todo";
import Faq from "./Pages/Test/Faq/Faq";
import Home from "./Pages/Home/Home";
import "./static/css/App.css";

const App = () => {
    return (
        <>
            <div className="Navi">
                <LeftNavi />
            </div>
            <div className="main">
                <Routes>
                    <Route path={RouterPath.Home} element={<Home />} />
                    <Route path={RouterPath.Todo} element={<Todo />} />
                    <Route path={RouterPath.Faq} element={<Faq />} />
                </Routes>
            </div>
        </>
    )
}

export default App;