import React from 'react';
import {Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLink from './SignOutLink';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Project Plan</Link>
                <SignOutLink/>
            </div>
        </nav>
    )
}

export default Navbar;