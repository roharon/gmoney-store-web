import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'component/header';
import Home from 'pages/home';
import Search from 'pages/search';
import CategoryList from 'pages/category';
import Card from 'pages/card';
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
				<Route path="/store/:category" component={CategoryList} />
				<Route path="/card" component={Card} />
			</Switch>
			<MenuBar
				active={active}
				setActive={setActive}
			/>
		</div>
	);
}

export default App;