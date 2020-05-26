import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-167597150-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode> 
    <Root />
  </React.StrictMode >,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
