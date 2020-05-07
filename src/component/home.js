import React from 'react';
import HomeCardList from './homeCardList';
import { WhiteSpace } from 'antd-mobile';
import './home.css';

const Home = () => {
  return (
    <div className="content">
      <WhiteSpace size="lg"/>
      <div className="title">
        종류별 
      </div>
        <HomeCardList />


      </div>
  )
}

export default Home;