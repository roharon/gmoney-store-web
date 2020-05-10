import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <App className="wrapper"/>
    </BrowserRouter>
);

export default Root;