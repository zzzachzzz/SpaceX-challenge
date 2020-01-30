import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import TimelineSlider from './components/TimelineSlider';

export const maxDaysInPast = 180;

export const allDates = ((daysInPast) => {
  const dates = [];
  const today = new Date();
  let date;
  for (let i = 0; i < daysInPast; i++) {
    date = new Date(today);
    date.setDate(date.getDate() - daysInPast + i);
    dates.push(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
  }
  console.log(dates);
  return dates;
})(maxDaysInPast);

export default function App() {
  function onMouseUpSlider() {
    console.log('onMouseUp');
    // fetch
  }

  function fetchLaunches(start, end) {
  }

  return (
    <div className="App">
      <div style={{position: 'absolute', bottom: '5%', width: '50vw'}}>
        <h3 style={{marginBottom: 0}}>SpaceX Launches Between</h3>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TimelineSlider onMouseUpSlider={onMouseUpSlider} />
          <span>{'&'}</span>
          <TimelineSlider onMouseUpSlider={onMouseUpSlider} />
        </div>
      </div>
    </div>
  );
}

