import React, { useState } from 'react';
import { maxDaysInPast, allDates } from '../App';

export default function TimelineSlider(props) {
  const [rangePoint, setRangePoint] = useState(-135);  // Today minus 135 days

  return (
    <div style={{display: 'inline-block', width: '38%'}}>
      <h4>{allDates[maxDaysInPast + rangePoint]}</h4>
      <input
        type="range"
        min={`-${maxDaysInPast}`} max="-1"
        value={rangePoint}
        onChange={e => setRangePoint(parseInt(e.target.value))}
        onMouseUp={props.onMouseUpSlider}
        step="1"
        style={{width: '90%'}} />
    </div>
  );
}

