import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import TimelineSliders from './components/TimelineSliders';

export const maxDaysInPast = 180;

export default function App() {
  const [startRange, setStartRange] = useState(-135);  // Today minus 135 days
  const [endRange, setEndRange] = useState(-45);  // Today minus 45 days
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  let allDates = useRef([]);

  useEffect(() => {
    computeDates(maxDaysInPast);
    setDates();
  }, []);

  function setDates() {
    setStartDate(allDates.current[maxDaysInPast + startRange]);
    setEndDate(allDates.current[maxDaysInPast + endRange]);
  }

  function onMouseUpSlider() {
    // fetch
    setDates();
  }

  function computeDates(daysInPast) {
    const today = new Date();
    let date;
    for (let i = 0; i < daysInPast; i++) {
      date = new Date(today);
      date.setDate(date.getDate() - daysInPast + i);
      allDates.current.push(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
    }
    console.log(allDates.current);
  }

  /**
   * @param {string} range - 'start' or 'end' range to update
   * @param {number} value - new range value, representing a past date
   */
  function onRangeChange(range, value) {
    range === 'start'
      ? setStartRange(value)
      : setEndRange(value);
  }

  function fetchLaunches(start, end) {
  }

  return (
    <div className="App">
      <p>StartDate: {startDate}</p>
      <p>EndDate: {endDate}</p>
      <TimelineSliders
        startRange={startRange}
        endRange={endRange}
        onRangeChange={onRangeChange}
        onMouseUpSlider={onMouseUpSlider} />
    </div>
  );
}

