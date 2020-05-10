import React from 'react';
import { Link } from 'react-router-dom';
import Item from './item';
import { FiHome, FiMap, FiSettings } from 'react-icons/fi';

const MenuBar = (props) => {
    const { active, setActive } = props;
    return (
        <div className={'menu-bar'} id={'menu-bar'}>
            <Link to="/">
                <Item
                    key={'main-menu-bar'}
                    value={'main'}
                    logo={<FiHome />}
                    text={'메인화면'}
                    isActive={active === 'main'}
                    setActive={setActive}
                /></Link>
            <Link to="/map">
                <Item
                    key={'map-menu-bar'}
                    value={'map'}
                    logo={<FiMap />}
                    text={'지도'}
                    isActive={active === 'map'}
                    setActive={setActive}
                /></Link>
            <Link to="/setting">
                <Item
                    key={'setting-menu-bar'}
                    value={'setting'}
                    logo={<FiSettings />}
                    text={'환경설정'}
                    isActive={active === 'setting'}
                    setActive={setActive}
                />
            </Link>
        </div>
    )
}


export default MenuBar;