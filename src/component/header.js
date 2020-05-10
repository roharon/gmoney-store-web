import React from 'react';
import { NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './header.css';

const Header = () => {
  return (
    <NavBar
      mode="light"
      style={{
        backgroundColor: '#F2F3F7',
        fontFamiliy: 'GmarketSansBold'
      }}
    >
      <p className="title">지역화폐 가맹점</p>
    </NavBar>
  );
}

export default Header;
