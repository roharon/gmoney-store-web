import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'

import Header from './component/header';
import TabMenu from './component/tabMenu';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header className="header"/>
      <TabMenu className="content"/>
    </div>
  );
}

export default App;
