import React from 'react';
import Countdown from 'react-countdown-now';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = {
  '@keyframes enter': {
    '0%': {
      backgroundColor: '#ffffff',
      color: '#ffffff'
    },
    '50%': {
      backgroundColor: '#000000',
      color: '#000000'
    },
    '100%': {
      backgroundColor: '#000000',
      color: '#666666'
    }
  },
  countdown: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000000',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    animation: 'enter 5s forwards'
  }
}

const count = ({classes, location}) => (
  <div className={classes.countdown}>
    <h1>Spooky Timer</h1>
    <Countdown date={parseInt(location.search.slice(6), 10)} />
  </div>
)

const Count = compose(
  withRouter,
  injectSheet(styles)
)(count);

export default Count;
