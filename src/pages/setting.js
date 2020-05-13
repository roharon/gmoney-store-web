import React from 'react';
import WipIcon from '../svg/wip.svg'
import './page.css';

const Setting = () => {
  return (
    <div className="content">
      <p className="title">
        환경설정
      </p>
      <img src={WipIcon} alt="작업중"/>
    </div>
  )
};

export default Setting;