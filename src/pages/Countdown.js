import React from 'react';
import Countdown from 'react-countdown-now';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import injectSheet from 'react-jss';
import {FormattedMessage} from 'react-intl';

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

const renderer = ({
  total,
  days,
  hours,
  minutes,
  seconds,
  milliseconds,
  completed
}) => {
  return (
    <p>
      <FormattedMessage
        key="days"
        id="app.daysLeft"
        description="The word for days"
        defaultMessage="{days, number} {days, plural,
          =0 {days}
          one {day}
          other {days}
        }"
        values={{days}}
      />
      , <FormattedMessage
        key="hours"
        id="app.hoursLeft"
        description="The word for hours"
        defaultMessage="{hours, number} {hours, plural,
          =0 {hours}
          one {hour}
          other {hours}
        }"
        values={{hours}}
      />
      , <FormattedMessage
        key="minutes"
        id="app.minutesLeft"
        description="The word for minutes"
        defaultMessage="{minutes, number} {minutes, plural,
          =0 {minutes}
          one {minute}
          other {minutes}
        }"
        values={{minutes}}
      />
      , <FormattedMessage
        key="seconds"
        id="app.secondsLeft"
        description="The word for seconds"
        defaultMessage="{seconds, number} {seconds, plural,
          =0 {seconds}
          one {second}
          other {seconds}
        }"
        values={{seconds}}
      />
    </p>
  )
}

const count = ({classes, location}) => (
  <div className={classes.countdown}>
    {/* <h1>Spooky Timer</h1> */}
    <Countdown
      date={parseInt(location.search.slice(6), 10)}
      renderer={renderer}
    />
  </div>
)

const Count = compose(
  withRouter,
  injectSheet(styles)
)(count);

export default Count;
