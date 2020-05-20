import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './header.css';

const Header = () => {
  return (
    <Link to="/">
      <NavBar
        mode="light"
        style={{
          backgroundColor: '#EEF0F5',
          fontFamiliy: 'GmarketSansBold'
        }}
      >
        <p className="title">지역화폐 가맹점</p>
      </NavBar>
    </Link>
  );
}

export default Header;
