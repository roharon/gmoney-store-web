import React, {useState} from 'react';
import HomeCardList from './homeCardList';
import { WhiteSpace, NoticeBar } from 'antd-mobile';
import './home.css';

const Home = () => {
  const [notice, setNotice] = useState("공지사항입니다");
  return (
    <div className="content">
      <WhiteSpace size="lg" />

      <p className="title">
        카테고리
      </p>

      <HomeCardList />

      <p className="title">
        안내
      </p>
      <WhiteSpace size="lg" />
      <NoticeBar marqueeProps={{loop:true, style: {padding: '0 7.5px'}}}>
        {notice}
      </NoticeBar>

    </div>
  )
}

export default Home;