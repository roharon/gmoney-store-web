import React from 'react';
import MapIcon from '../svg/map.svg';
import PhoneIcon from '../svg/phone.svg';
import './storeCard.css'

const EmptyCard = (props) => {
  const {msg} = props;
  return (
    <div className="empty">
      {msg}
    </div>
  )
}

const StoreCard = (props) => {
  const { Item, emptyMsg, emptyShow } = props;

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
            <a href={
              `kakaomap://look?p=${Item[key]['latitude']},${Item[key]['longitude']}`
            }>
              <img className="icon" src={MapIcon} alt="지도" />
            </a>
          </div>

        </div>
      </div>
    )
  })

  return (
    <div>
      {itemData.length !== 0 ? itemData : emptyShow && <EmptyCard msg={emptyMsg}/>}
    </div>
  )
}

export default StoreCard;