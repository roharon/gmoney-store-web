import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddressPicker from '../component/addressPicker';
import { SearchBar } from '../component/search';
import StoreCard from '../component/storeCard';
import './page.css';
import './search.css'


const Search = () => {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState({});
  const [address, setAddress] = useState(localStorage.getItem('sigoon'));
  const [emptyShow, setEmptyShow] = useState(false);
  const [page, setPage] = useState(0);
  const sigoon = localStorage.getItem('sigoon');
  const emptyMsg = "찾으시는 가맹점이 없습니다"
  const SEARCH_LENGTH = 2;

  const addressHandleOnChange = (e) => {
    localStorage.setItem('sigoon', e.target.value);
    const sigoon = localStorage.getItem('sigoon');
    setAddress(sigoon);
  };

  useEffect(() => {
    const getStore = async () => {
      await axios
        .get('/api/v1/store/search', {
          params: {
            title: search,
            sigoon: sigoon,
            page: page
          }
        })
        .then(data => {
          setStore(data.data.data.content)
        })
    }

    if (search.length >= SEARCH_LENGTH) {
      getStore()
      setEmptyShow(search ? true : false)
    }
  }, [search, page, sigoon])

  //TODO: infinite scroll 추가
  return (
    <div className="content">
      <div className="search-option">
        <AddressPicker
          onChange={addressHandleOnChange}
          value={address}
        />
        <SearchBar
          placeholder={"가맹점 검색 (3글자 이상)"}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {
        search ?
        <StoreCard
          Item={store}
          emptyShow={emptyShow}
          emptyMsg={emptyMsg}
        />
        : <span>찾으시는 가맹점 이름을 입력해주세요</span>
      }

    </div>
  )
};

export default Search;