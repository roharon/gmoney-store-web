import React, { useState, useLayoutEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'component/header';
import Home from 'pages/home';
import Map from 'pages/map';
import Setting from 'pages/setting';
import CategoryList from 'pages/category';
import MenuBar from 'component/menuBar';
import './App.css'

const useWindowSize = () => {
	const [heightSize, setHeightSize] = useState(0);

	useLayoutEffect(() => {
		const updateSize = () => {
			setHeightSize([window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return heightSize;
}

const App = () => {
	const [active, setActive] = useState('events');
	const height = useWindowSize();
	let vh = height * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	return (
		<div className="App">
			<Header className="header" />
			<Route exact path="/" component={Home} />
			<Switch>
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