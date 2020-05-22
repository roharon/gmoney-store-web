import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locale from '../locale/ko';
import App from '../shared/App';

const currentLocale = localStorage.getItem('locale') || 'ko'

const Root = () => (
	<IntlProvider
    locale={currentLocale}
    messages={locale[currentLocale]}>
    <BrowserRouter>
        <App className="wrapper"/>
    </BrowserRouter>
	</IntlProvider>
);

export default Root;