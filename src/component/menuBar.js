import React from 'react';
import { Link } from 'react-router-dom';
import Item from './menuBarItem';
import { FiHome, FiMap, FiSearch } from 'react-icons/fi';

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
            <Link to="/search">
                <Item
                    key={'search-menu-bar'}
                    value={'search'}
                    logo={<FiSearch />}
                    text={'검색'}
                    isActive={active === 'search'}
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
        </div>
    )
}


export default MenuBar;