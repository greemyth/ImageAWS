import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      {isLoggedIn && <Link to="/upload">Upload Image</Link>}
      {isLoggedIn && <Link to="/searchByTags">Search by Tags</Link>}
      {isLoggedIn && <Link to="/searchByImage">Search by Image</Link>}
      {isLoggedIn && <Link to="/removeTags">Remove Tags</Link>}
      {isLoggedIn && <Link to="/deleteImage">Delete Image</Link>}
    </nav>
  );
};

export default Navbar;
