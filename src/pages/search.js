import React, { useState } from 'react';
import { WhiteSpace } from 'antd-mobile';
import {SearchBar} from '../component/search';
import StoreCard from '../component/storeCard';
import './page.css';


const Search = () => {
  const [address, setAddress] = useState(localStorage.getItem('sigoon'));
  const [search, setSearch] = useState();
  const [emptyMsg, setEmptyMsg] = useState("가맹점이 없습니다")

  const handleOnChange = (e) => {
    localStorage.setItem('sigoon', e.target.value);
    const sigoon = localStorage.getItem('sigoon');
    setAddress(sigoon);
  };

  //TODO: Infinite-scroll 적용 or pagniation-bar

  return (
    <div className="content">
      <SearchBar
        placeholder={"가맹점 검색하기"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StoreCard
        Item={{}}
        emptyMsg={emptyMsg}
      />

    </div>
  )
};

export default Search;