import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
return (
<nav className="navbar">
<div className="navbar-brand">Sunny Moving & Storage</div>
<ul className="navbar-menu">
<li className="navbar-item">
<Link to="/" className="navbar-link">Home</Link>
</li>
<li className="navbar-item">
<Link to="/services" className="navbar-link">Services</Link>
</li>
<li className="navbar-item">
<Link to="/contact" className="navbar-link">Contact</Link>
</li>
</ul>
</nav>
);
};


export default NavBar;