import React from 'react';
import { Layout } from 'antd';
import { NavLink, Link } from 'react-router-dom';

import logo from '../images/logo.jpg';

const { Header } = Layout;
const activeStyle = { fontWeight: 'bold', color: 'red' };
export default () => (
  <Header className="header">
    <div className="header-title">
      <Link to="/">
        <img src={logo} alt="nh3-logo" className="logo" />
      </Link>
      <h1>Nate Hawley III</h1>
    </div>

    <ul>
      <li><NavLink activeStyle={activeStyle} to="/about"> About </NavLink></li>
      <li><NavLink activeStyle={activeStyle} to="/work"> Work </NavLink></li>
      <li><NavLink activeStyle={activeStyle} to="/contact"> Contact </NavLink></li>
    </ul>
  </Header>
);