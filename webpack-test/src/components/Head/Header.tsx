import React from "react";
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { RouterPath } from "../../router/router";

const Header = () => {
    const navigate = useNavigate();

    const onClick = (url: string) => {
      navigate(url);
    };
    return(
        <>
            <div>
                <div className="UserPanel">
                    <div className="UserButton" onClick={() => onClick(RouterPath.Login)}>login</div>
                    <div className="UserButton" onClick={() => onClick(RouterPath.Register)}>register</div>
                    <div className="UserButton">avatar</div>
                </div>
            </div>
        </>
    )
}

export default Header;