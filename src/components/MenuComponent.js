import React from 'react';
import "bulma/css/bulma.css"
import "./Style/AppStyle.css"
import FontChange from './FontChange';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function MenuComponent(){
    return(
  <aside className="menu">
      <p className="menu-label" >
      <big>Menu</big>
      </p>
      <ul className="menu-list">
        <Router>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        </Router>
      </ul>
      <p className="menu-label">
        Administration
      </p>
      <ul className="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a>Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p className="menu-label">
        Transactions
      </p>
      <ul className="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
      <p className="menu-label">
        Page Settings
      </p>
      <ul>
        <li><FontChange/></li>
      </ul>
</aside>
    );
}


export default MenuComponent;