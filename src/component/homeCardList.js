import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Flex } from 'antd-mobile';
import axios from 'axios';
import './homeCardList.css';


const cardBanner = (name, count, lat, lng) => {
  return (
    <Link to={{
      pathname: `/store/${name}`,
      state: {
        lat: lat,
        lng: lng,
      }
    }}>
      <div className="card">
        <div style={{ height: '100%', width: '100%' }}>
          <div style={{
            height: '60%', width: '100%', textAlign: 'left',
            fontSize: '30px'
          }}>
            <FormattedMessage id={name} />
          </div>
          <div style={{ height: '40%', fontFamily: 'GmarketSansMedium' }}>
            {count ?
              <p>내 주변 <span className='description'>{count}</span>곳</p>
              : count === 0 ?
                <p>주변에 가게가 없어요 <span role="img" aria-label="sad">😢</span></p>
                : <p>찾으러 가는 중 <span role="img" aria-label="run">🏃‍♀️</span></p>
            }
          </div>
        </div>
      </div>
    </Link>
  )
}

const HomeCardList = (props) => {
  const { latitude, longitude } = props;
  const [restaCount, setRestaCount] = useState(null);
  const [marketCount, setMarketCount] = useState(null);
  const [pharmacyCount, setPharmacyCount] = useState(null);
  const [cvsCount, setCvsCount] = useState(null);

  const cardResta = cardBanner('restaurant', restaCount, latitude, longitude);
  const cardMarket = cardBanner('market', marketCount, latitude, longitude);
  const cardCafe = cardBanner('pharmacy', pharmacyCount, latitude, longitude);
  const cardCvs = cardBanner('cvs', cvsCount, latitude, longitude);

  let sigoon = localStorage.getItem('sigoon');

  useEffect(() => {
    const getRestaCount = async () => {
      const response = await axios.get('/api/v1/store/near/category/count', {
        params: {
          category: 'restaurant',
          sigoon: sigoon,
          lat: latitude,
          lng: longitude
        }
      })
      setRestaCount(response.data['data']['restaurant']);
    }

    const getMarketCount = async () => {
      const response = await axios.get('/api/v1/store/near/category/count', {
        params: {
          category: 'market',
          sigoon: sigoon,
          lat: latitude,
          lng: longitude
        },
        timeout: 3000
      }
      )
      setMarketCount(response.data['data']['market'])
    }

    const getPharmacyCount = async () => {
      const response = await axios.get('/api/v1/store/near/category/count', {
        params: {
          category: 'pharmacy',
          sigoon: sigoon,
          lat: latitude,
          lng: longitude
        },
        timeout: 3000
      })
      setPharmacyCount(response.data['data']['pharmacy'])
    }

    const getCvsCount = async () => {
      const response = await axios.get('/api/v1/store/near/category/count', {
        params: {
          category: 'cvs',
          sigoon: sigoon,
          lat: latitude,
          lng: longitude
        },
        timeout: 3000
      })
      setCvsCount(response.data['data']['cvs'])
    }

    getRestaCount();
    getMarketCount();
    getPharmacyCount();
    getCvsCount();
  });

  return (
    <div>
      <Flex className="item" direction="row" justify="center" align="center" alignContent="center">
        <Flex.Item>
          {cardResta}
          {cardMarket}
        </Flex.Item>
        <Flex.Item>
          {cardCafe}
          {cardCvs}
        </Flex.Item>
      </Flex>
    </div>
  )
}

export default HomeCardList;