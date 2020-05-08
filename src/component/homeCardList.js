import React from 'react';
import { Flex } from 'antd-mobile';
import './homeCardList.css';

const cardBanner = (title, count) => {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <div style={{height: '60%', width: '100%', textAlign: 'left', 
                  fontSize: '30px'}}>
      {title}
      </div>
      <div style={{height: '40%', fontFamily: 'GmarketSansMedium'}}>
      내 주변 <span className='description'>{count}</span>곳
      </div>
    </div>
  )
}

const HomeCardList = () => {
  const cardFood = cardBanner("음식점", 113);
  const cardMart = cardBanner("마트", 13);
  const cardCafe = cardBanner("카페", 9);
  const cardEtc = cardBanner("그 외", 372);

  return (
    <div className="container">
      <Flex className="item" direction="row" justify="center" align="center" alignContent="center">
        <Flex.Item>
          <div className="card">
            {cardFood}
          </div>
          <div className="card">
            {cardMart}
              </div>
        </Flex.Item>
        <Flex.Item>
          <div className="card">
            {cardCafe}
              </div>
          <div className="card">
            {cardEtc}
              </div>
        </Flex.Item>
      </Flex>
    </div>
  )
}

export default HomeCardList;