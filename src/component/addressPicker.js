import React from 'react';
import './addressPicker.css';

const sigoonData = ['가평군', '고양시', '과천시', '광명시',
  '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시',
  '부천시', '성남시', '수원시', '시흥시', '안산시', '안성시', '안양시',
  '양주시', '양평군', '여주시', '연천군', '오산시', '용인시', '의왕시',
  '의정부시', '이천시', '파주시', '평택시', '포천시', '하남시'];

const AddressPicker = (props) => {
  const {onChange, value} = props;

  return (
    <div className="form-group">
    <select className="select-control" 
      value={value}
      onChange={onChange}
    >
      {
        sigoonData.map((sigoon) => 
          <option key={sigoon} value={sigoon}>{sigoon}</option>
        )
      }
    </select>
  </div>
  )
}

export default AddressPicker;