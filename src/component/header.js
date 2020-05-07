import React from 'react';
import { NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './tabMenu.css';

const Header = () => {
  return (
      <NavBar
        mode="light"
        style={{backgroundColor: '#F1F3F7'}}
      >
        지역화폐 가맹점
      </NavBar>
  );
}

export default Header;
