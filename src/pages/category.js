import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import axios from 'axios';
import { usePosition } from 'component/usePosition';
import MapIcon from '../svg/map.svg';
import PhoneIcon from '../svg/phone.svg';
import './category.css';


const StoreCard = (props) => {
  const { Item } = props;

  const itemData = Object.keys(Item).map((key) => {
    return (
      <div key={key} className="list">
        <div className="name">
          {Item[key]['title']}
        </div>
        <div className="property">
          <div className="category">
            <div className="category">
              <a href={`tel:${Item[key]['phoneNumber']}`}>
              <img className="icon" src={PhoneIcon} alt="전화" />
              </a>
            </div>
          </div>
          <div className="stick" />
          <div className="category">
            <img className="icon" src={MapIcon} alt="지도" />
          </div>

        </div>
      </div>
    )
  })

  return (
    <div>
      {itemData}
    </div>
  )
}

const CategoryList = ({ match }) => {
  const [store, setStore] = useState({});
  const { latitude, longitude } = usePosition();

  const sigoon = localStorage.getItem('sigoon');

  useEffect(() => {
    const getStoreByCategory = async (setStore, category, page) => {
      await axios
        .get('/store/near/category', {
          params: {
            page: page,
            category: category,
            sigoon: sigoon,
            lat: latitude,
            lon: longitude
          }
        })
        .then(data => (
          setStore(data.data.data.content)
        ))
    }
    getStoreByCategory(setStore, match.params.category, 0);
  }, [match.params.category, longitude, latitude]);

  return (
    <div className="content">
      <p className="title">
        <FormattedMessage id={match.params.category} /> 메뉴
      </p>
      {<StoreCard Item={store} />}
    </div>
  )
};

export default CategoryList;