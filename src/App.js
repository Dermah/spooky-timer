import React from 'react';
import {compose, branch, renderComponent} from 'recompose';
import {BrowserRouter, withRouter} from 'react-router-dom';

import {IntlProvider, addLocaleData} from 'react-intl';

import Prepare from './pages/Prepare';
import Countdown from './pages/Countdown';

import './App.css';

import messages from './i18n/messages.json';

import en from 'react-intl/locale-data/en';
addLocaleData([...en]);


const Screen = compose(
  withRouter,
  branch(
    ({location}) => !location.search,
    renderComponent(Prepare),
    renderComponent(Countdown)
  )
)();

const navigator = window.navigator;
let language =
  (navigator && navigator.languages && navigator.languages[0]) ||
  (navigator && navigator.language) ||
  'en';
language = language.split("-")[0];

const App = () => (
  <IntlProvider
    locale={language}
    defaultLocale='en'
    messages={messages[language]}
  >
    <BrowserRouter>
      <Screen />
    </BrowserRouter>
  </IntlProvider>
)

export default compose(
)(App);
