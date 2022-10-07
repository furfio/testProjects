import React from "react";
import { Routes, Route } from "react-router-dom"
import LeftNavi from "./components/navi/Navi";
import { RouterPath } from "./router/router";
import Todo from "./Pages/Test/Todo/Todo";
import Faq from "./Pages/Test/Faq/Faq";
import Home from "./Pages/Home/Home";
import Counter from "./Pages/Test/Counter/Counter";
import Map from "./Pages/Test/Map/Map";
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
                    <Route path={RouterPath.Counter} element={<Counter />} />
                    <Route path={RouterPath.Map} element={<Map />} />
                </Routes>
            </div>
        </>
    )
}

export default App;