import React from 'react';
import Countdown from 'react-countdown-now';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';

const count = ({location}) => (
  <Countdown date={parseInt(location.search.slice(6), 10)} />
)

const Count = compose(
  withRouter
)(count);

export default Count;
