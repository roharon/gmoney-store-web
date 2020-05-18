import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { usePosition } from 'component/usePosition';
import StoreCard from 'component/storeCard';
import './category.css';


const CategoryList = (props) => {
  const category = props.match.params.category;
  const {lat, lng} = props.location.state;
  const [store, setStore] = useState({});

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
        .then(data => (
          setStore(data.data.data.content)
        ))
    }
    getStoreByCategory(0);
  },[lat, lng]);


  //TODO: StoreCard infinite-scroll 적용
  // search 페이지와 같이 쓰일테니 storeCard listView 공통컴포넌트를 만들어서 쓰자
  return (
    <div className="content">
      <p className="title">
        나와 가까운 <FormattedMessage id={category} />
      </p>
      {<StoreCard Item={store} emptyMsg="불러오는 중"/>}  
    </div>
  )
};

export default CategoryList;