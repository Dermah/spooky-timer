import React from 'react';
import {compose, withState} from 'recompose';

import logo from './logo.svg';
import './App.css';


const App = ({
  time,
  updateTime,
  date,
  updateDate
}) => {
  return (
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
    </div>
  );
}

export default compose (
  withState('time', 'updateTime', ""),
  withState('date', 'updateDate', ""),
)(App);
