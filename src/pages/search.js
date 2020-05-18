import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {SearchBar} from '../component/search';
import StoreCard from '../component/storeCard';
import './page.css';


const Search = () => {
  const [search, setSearch] = useState("");
  const [store, setStore] = useState({});
  const [emptyShow, setEmptyShow] = useState(false);
  const [page, setPage] = useState(0);
  const sigoon = localStorage.getItem('sigoon');
  const emptyMsg = "찾으시는 가맹점이 없습니다"

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

    if (search.length >= 3){
      getStore()
      setEmptyShow(search ? true : false)
    }
  }, [search, page, sigoon])

  //TODO: infinite scroll 추가
  return (
    <div className="content">
      <SearchBar
        placeholder={"가맹점 검색 (3글자 이상)"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StoreCard
        Item={store}
        emptyShow={emptyShow}
        emptyMsg={emptyMsg}
      />
    </div>
  )
};

export default Search;