import React from 'react';
import {compose, branch, renderComponent} from 'recompose';
import {BrowserRouter, withRouter} from 'react-router-dom';

import {IntlProvider} from 'react-intl';

import Prepare from './pages/Prepare';
import Countdown from './pages/Countdown';

import './App.css';


const Screen = compose(
  withRouter,
  branch(
    ({location}) => !location.search,
    renderComponent(Prepare),
    renderComponent(Countdown)
  )
)();

const navigator = window.navigator;
let language = (navigator && navigator.language) || 'en';

const App = () => (
  <IntlProvider
    locale={language}
  >
    <BrowserRouter>
      <Screen />
    </BrowserRouter>
  </IntlProvider>
)

export default compose(
)(App);
