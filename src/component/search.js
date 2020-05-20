import React from 'react';
import './search.css';

export const SearchBar = (props) => {
  const {onChange, placeholder} = props;

  return (
    <div>
    <input className="search" 
      onChange={onChange}
      placeholder={placeholder}
    >
    </input>
  </div>
  )
}
