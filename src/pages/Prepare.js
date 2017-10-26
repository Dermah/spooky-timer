import React from 'react';
import {compose, withState} from 'recompose';
import {withRouter} from 'react-router-dom';

import logo from '../logo.svg';

const prepare = ({
  time,
  updateTime,
  date,
  updateDate,
  location,
  history
}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Spooky Timer</h1>
    </header>
    <p className="App-intro">
      To get started, pick a time.
    </p>
    <p>
      <input
        type="time"
        placeholder="time"
        value={time}
        onChange={(e) => updateTime(e.target.value)}
      />
      <input
        type="date"
        placeholder="date"
        value={date}
        onChange={(e) => updateDate(e.target.value)}
      />

    </p>
    <p>
      {time} + {date}
    </p>
    <p>
      <button
        onClick={() => history.push('/?date=' + Date.parse(time + " " + date))}
        disabled={!Date.parse(time + " " + date)}
        >
          Spooky Countdown
      </button>
    </p>
  </div>
)

const Prepare = compose(
  withState('time', 'updateTime', ""),
  withState('date', 'updateDate', ""),
  withRouter
)(prepare);

export default Prepare;
