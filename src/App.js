import React from 'react';
import {compose, branch, renderComponent} from 'recompose';
import {BrowserRouter, withRouter} from 'react-router-dom';

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

const App = () => (
  <BrowserRouter>
    <Screen />
  </BrowserRouter>
)

export default compose(
)(App);
