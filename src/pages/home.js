import React from 'react';
import HomeCardList from '../component/homeCardList';
import { WhiteSpace } from 'antd-mobile';
import './page.css';

const Home = () => {
  return (
    <div className="content">
      <p className="title">
        카테고리
      </p>

      <HomeCardList />     

      <p className="title">
        안내
      </p>
      <WhiteSpace size="lg" />

    </div>
  )
};

export default Home;