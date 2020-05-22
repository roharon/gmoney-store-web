import React, { useState } from 'react';
import { WhiteSpace } from 'antd-mobile';
import { usePosition } from '../component/usePosition';
import HomeCardList from '../component/homeCardList';
import AddressPicker from '../component/addressPicker';
import './page.css';


const Home = () => {
  const { latitude, longitude } = usePosition();
  const [address, setAddress] = useState(localStorage.getItem('sigoon'));

  const handleOnChange = (e) => {
    localStorage.setItem('sigoon', e.target.value);
    const sigoon = localStorage.getItem('sigoon');
    setAddress(sigoon);
  };

  return (
    <div className="content">
      <AddressPicker
        onChange={handleOnChange}
        value={address}
      />

      <p className="title">
        카테고리
      </p>

      <HomeCardList 
        latitude={latitude}
        longitude={longitude}
      />

      <p className="title">
        안내
      </p>
      <WhiteSpace size="lg" />

    </div>
  )
};

export default Home;