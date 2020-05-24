import React from 'react';
import gyeonggiSlogan from '../resource/gyeonggi-slogan.png';
import './creditCard.css';


const CreditCard = (props) => {
  const { number } = props;
  return (
      <div className="ccard-plate">
        <img className="ccard-logo" src={gyeonggiSlogan} />
        <div className="ccard-title">
          재난기본소득<br/>선불카드
        </div>
        <div className="ccard-number">
          **** ****<br/>**** { number || "0000" }
        </div>
        <div className="ccard-option">
          만료기간 : <span className="ccard-exp">08/20</span>
        </div>
      </div>
  )
}

export default CreditCard;