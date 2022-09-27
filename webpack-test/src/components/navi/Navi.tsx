import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RouterPath } from '../../router/router';


export const LeftNavi: React.FunctionComponent = () => {
    return (
        <div>
            <nav>
                <Link to={RouterPath.Home}>Home</Link>
                <Link to={RouterPath.Todo}>Todo</Link>
                <Link to={RouterPath.Faq}>Faq</Link>
            </nav>
            <Outlet />
        </div>
    );
};
