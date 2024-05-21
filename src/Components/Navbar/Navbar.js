import React from 'react';
import { useDispatch } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCHTERM', payload: e.target.value });
  };

  return (
    <nav>
      <img src='./reddit-logo-reddit.png' alt="Logo" className="navbar-logo" />
      <input
        type="text"
        placeholder='Search...'
        onChange={handleSearch}
       />
    </nav>
  );
}

export default Navbar;
