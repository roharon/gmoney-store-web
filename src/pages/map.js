import React, { useEffect } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import {usePosition} from '../component/usePosition';
import './page.css';

const NaverMapApi = () => {
  const { latitude, longitude } = usePosition();

  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '100%',
        height: '90vh'
      }}
      defaultCenter={{ lat: 37.5 || latitude, lng: 127.01 || longitude }}
      defaultZoom={15}
    />
  )
}

const Map = () => {
  return (
    <div className="content">
      <p className="title">
        지도
      </p>
      <RenderAfterNavermapsLoaded
        ncpClientId={'ntyf3x1ryl'}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapApi />
      </RenderAfterNavermapsLoaded>
    </div>

  )
};

export default Map;