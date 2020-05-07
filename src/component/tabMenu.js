import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { FiHome, FiMap, FiSettings } from 'react-icons/fi';
import Home from './home';

import 'antd-mobile/dist/antd-mobile.css'
import './tabMenu.css';

const renderContent = (pageText) => {
  return (
    <Home/>
  )
}

const TabMenu = () => {
  const [tabName, userSetTabName] = useState("1");
  const FirstMenu = "홈";
  const SecondMenu = "지도";
  const ThirdMenu = "설정";

  return (
    <TabBar className="tabmenu"
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      bareTintColor="black"
    >
      <TabBar.Item
        title={FirstMenu}
        key={FirstMenu}
        icon={<FiHome/>}
        selected={tabName === {FirstMenu}}
        onPress={() => {
          userSetTabName({FirstMenu})
        }}
      >
        {renderContent("First Page")}
      </TabBar.Item>
      <TabBar.Item
        title={SecondMenu}
        key={SecondMenu}
        icon={<FiMap/>}
        selected={tabName === {SecondMenu}}
        onPress={() => {
          userSetTabName({SecondMenu})
        }}
      >
        {renderContent({SecondMenu})}
      </TabBar.Item>
      <TabBar.Item
        title={ThirdMenu}
        key={ThirdMenu}
        icon={<FiSettings/>}
        selected={tabName === {ThirdMenu}}
        onPress={() => {
          userSetTabName({ThirdMenu})
        }}
      >
        {renderContent({ThirdMenu})}
      </TabBar.Item>
    </TabBar>
  );
}

export default TabMenu;