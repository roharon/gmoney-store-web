import React, { useState, useLayoutEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'component/header';
import Home from 'pages/home';
import Search from 'pages/search';
import Map from 'pages/map';
import Setting from 'pages/setting';
import CategoryList from 'pages/category';
import MenuBar from 'component/menuBar';
import './App.css'


const App = () => {
	const [active, setActive] = useState('events');
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	return (
		<div className="App">
			<Header className="header" />
			<Route exact path="/" component={Home} />
			<Switch>
				<Route path="/search" component={Search} />
				<Route path="/map" component={Map} />
				<Route path="/setting" component={Setting} />
				<Route path="/store/:category" component={CategoryList} />
			</Switch>
			<MenuBar
				active={active}
				setActive={setActive}
			/>
		</div>
	);
}

export default App;