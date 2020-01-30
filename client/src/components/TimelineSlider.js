import React, { useState } from 'react';
import { maxDaysInPast, allDates } from '../App';

export default function TimelineSlider(props) {
  return (
    <div style={{display: 'inline-block', width: '38%'}}>
      <h4>{allDates[maxDaysInPast + props.rangePoint]}</h4>
      <input
        type="range"
        min={`-${maxDaysInPast}`} max="-1"
        value={props.rangePoint}
        onChange={e => props.onChangeSlider(e, props.index)}
        onMouseUp={e => props.onMouseUpSlider(e)}
        step="1"
        style={{width: '90%'}} />
    </div>
  );
}

