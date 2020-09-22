import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <header className="site-header">
            <div className="navbar-container">
                <div className="bar">
                    <a href="/">
                        <h1 className="no-margin">
                            Skydrop
                            <span>X</span>
                        </h1>
                    </a>
                    <nav className="navigation">
                        <NavLink
                            exact
                            activeClassName="navbar-active"
                            to="/"
                        >
                            Popular
                        </NavLink>
                        <NavLink
                            activeClassName="navbar-active"
                            to="/on_air"
                        >
                            On Air
                        </NavLink>
                        <NavLink
                            activeClassName="navbar-active"
                            to="/rated"
                        >
                            Rated
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
