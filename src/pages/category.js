import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import StoreCard from 'component/storeCard';
import './category.css';


const CategoryList = (props) => {
  const category = props.match.params.category;
  const {lat, lng} = props.location.state;
  const [store, setStore] = useState({});
  const [emptyMsg, setEmptyMsg] = useState("불러오는 중");

  const sigoon = localStorage.getItem('sigoon');

  useEffect(() => {
    const getStoreByCategory = async (page) => {
      await axios
        .get('/api/v1/store/near/category', {
          params: {
            page: page,
            category: category,
            sigoon: sigoon,
            lat: lat,
            lng: lng
          }
        })
        .then(data => {
          if (data.data.data.totalElements === 0) {
            setEmptyMsg(`(${sigoon}) 이용 가능한 가맹점이 없습니다`)
          }
          setStore(data.data.data.content)
        })
    }
    getStoreByCategory(0);
  },[lat, lng, category, sigoon, emptyMsg]);

  //TODO: infinite-scroll 적용
  return (
    <div className="content">
      <p className="title">
        나와 가까운 <FormattedMessage id={category} />
      </p>
      <StoreCard Item={store} 
        emptyMsg={emptyMsg}
        emptyShow={true}/> 
    </div>
  )
};

export default CategoryList;