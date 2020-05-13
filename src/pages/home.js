import React, {useState, useEffect} from 'react';
import { WhiteSpace } from 'antd-mobile';
import HomeCardList from '../component/homeCardList';
import AddressPicker from '../component/addressPicker';
import './page.css';


const Home = () => {
  const [address, setAddress] = useState(localStorage.getItem('sigoon'));

  const handleOnChange = (e) => {
    localStorage.setItem('sigoon', e.target.value);
    const sigoon = localStorage.getItem('sigoon');
    setAddress(sigoon);
  };

  return (
    <div className="content">
      <p className="title">
        카테고리
      </p>
      <AddressPicker
        onChange={handleOnChange}
        value={address}
      />
      <HomeCardList />     

      <p className="title">
        안내
      </p>
      <WhiteSpace size="lg" />

    </div>
  )
};

export default Home;