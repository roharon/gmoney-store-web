import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { FiHome, FiMap, FiSettings, FiTrash } from 'react-icons/fi';
import Home from './home';

import 'antd-mobile/dist/antd-mobile.css'
import './tabMenu.css';

const renderContent = () => {
  return (
    <Home />
  )
}

const TabMenu = () => {
  const [tabName, userSetTabName] = useState("");
  const FirstMenu = '메인';
  const SecondMenu = '지도';
  const ThirdMenu = '설정';

  return (
    <TabBar className='tabbar'
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      bareTintColor="black"
    >
      <TabBar.Item
        title={FirstMenu}
        key={FirstMenu}
        icon={<FiHome />}
        selectedIcon={<FiHome style={{ color: '#33A3F4' }} />}
        selected={tabName === FirstMenu}
        onPress={() => {
          userSetTabName(FirstMenu)
          console.log(tabName)
        }}
      >
        {renderContent()}
      </TabBar.Item>
      <TabBar.Item
        title={SecondMenu}
        key={SecondMenu}
        icon={<FiMap />}
        selectedIcon={<FiMap style={{ color: '#33A3F4' }} />}
        selected={tabName === SecondMenu}
        onPress={() => {
          userSetTabName(SecondMenu)
        }}
      >
        as
      </TabBar.Item>
      <TabBar.Item
        title={ThirdMenu}
        key={ThirdMenu}
        icon={<FiSettings />}
        selectedIcon={<FiSettings style={{ color: '#33A3F4' }} />}
        selected={tabName === ThirdMenu}
        onPress={() => {
          userSetTabName(ThirdMenu)
        }}
      >
        {ThirdMenu}
      </TabBar.Item>
    </TabBar>
  );
}

export default TabMenu;