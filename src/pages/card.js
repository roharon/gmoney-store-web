import React from 'react';
import axios from 'axios';
import CreditCard from '../component/creditCard';
import './page.css';

const Card = () => {
  return (
    <div className="content">
      <CreditCard
        number="1234"
      />
    </div>
  )
}
//TODO: write copyright

export default Card;