import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TimelineSlider from './components/TimelineSlider';
import Timeline from './components/Timeline';

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
  const [rangePoints, setRangePoints] = useState([-135, -125]);

  function onChangeSlider(e, index) {
    const arr = [...rangePoints];
    arr[index] = parseInt(e.target.value);
    setRangePoints(arr);
  }

  function onMouseUpSlider(e) {
    // (Remember we're dealing with negative numbers, indicating how many days ago)
    const start = allDates[ maxDaysInPast + Math.min(rangePoints[0], rangePoints[1]) ];
    const end = allDates[ maxDaysInPast + Math.max(rangePoints[0], rangePoints[1]) ];

    let startTime = new Date();
    let endTime;

    fetch(`/api/launches?start=${start}&end=${end}`)
      .then(res => {
        endTime = new Date();
        return res.json();
      })
      .then(json => {
        console.log(`Round trip time: ${endTime - startTime}ms`);
        console.log(`Request to SpaceX sent at: ${json.time.sent}`);
        console.log(`Request from SpaceX recieved at: ${json.time.recieved}`);
        console.log(json.spacex[0].mission_name);
      })
      .catch(err => console.error(err));
  }

  function fetchLaunches(start, end) {
  }

  return (
    <div className="App">
      <Timeline />
      <div style={{position: 'absolute', bottom: '5%', width: '50vw'}}>
        <h3 style={{marginBottom: 0}}>SpaceX Launches Between</h3>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TimelineSlider rangePoint={rangePoints[0]}
                          onChangeSlider={onChangeSlider}
                          onMouseUpSlider={onMouseUpSlider}
                          index={0}
          />
          <span>{'&'}</span>
          <TimelineSlider rangePoint={rangePoints[1]}
                          onChangeSlider={onChangeSlider}
                          onMouseUpSlider={onMouseUpSlider}
                          index={1}
          />
        </div>
      </div>
    </div>
  );
}

