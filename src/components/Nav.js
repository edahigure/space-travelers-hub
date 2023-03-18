import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../styling/planet.png';

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="header">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="nav-title">Space Travelers Hub</div>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink
            to="/rockets"
            className={({ isActive }) => (isActive ? 'li-active' : 'li-item')}
          >
            Rockets
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? 'li-active' : 'li-item')}
          >
            Missions
          </NavLink>
        </li>
        <div className="vertical-line">|</div>
        <li className="nav-link">
          <NavLink
            to="/myprofile"
            className={({ isActive }) => (isActive ? 'li-active' : 'li-item')}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
