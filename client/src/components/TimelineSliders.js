import React from 'react';
import './TimelineSliders.css';
import { maxDaysInPast } from '../App';

export default function TimelineSliders(props) {
  return (
    <div className="TimelineSliders">
      <h3 style={{marginBottom: 0}}>SpaceX Launches</h3>
      <div className="slider-container">
        <h4>Starting Date</h4>
        <input
          style={{left: '10%'}}
          className="slider"
          type="range"
          min={`-${maxDaysInPast}`} max={`-${maxDaysInPast / 2}`}
          value={props.startRange}
          onChange={e => props.onRangeChange('start', parseInt(e.target.value))}
          onMouseUp={props.onMouseUpSlider}
          step="1" />
      </div>
      <div className="slider-container">
        <h4>Ending Date</h4>
        <input
          style={{right: '10%'}}
          className="slider"
          type="range"
          min={`-${maxDaysInPast / 2}`} max="-1"
          value={props.endRange}
          onChange={e => props.onRangeChange('end', parseInt(e.target.value))}
          onMouseUp={props.onMouseUpSlider}
          step="1" />
      </div>
    </div>
  );
}

