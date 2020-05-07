import React from 'react';
import {Flex} from 'antd-mobile';
import './homeCardList.css';

const HomeCardList = () => {
    return (
        <div className="content">
        <div className="box">
          <Flex className="item" direction="row" justify="center" align="center" alignContent="center">
            <Flex.Item>
              <div className="card">
                Card 1
              </div>
              <div className="card">
                Card 2
              </div>
            </Flex.Item>
            <Flex.Item>
            <div className="card">
                Card 3
              </div>
              <div className="card">
                Card 4
              </div>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    )
}

export default HomeCardList;