import React from 'react';
import Launch from './Launch';
import { darkGrey } from '../App';

export default function Timeline({launches, onClickLaunch}) {
  const timelineStyle = {
    position: 'absolute', left: 0, height: '100%', width: '20%', backgroundColor: darkGrey, overflow: 'scroll'
  };

  return (
    <div style={timelineStyle}>
      {launches.map((launch, i) => <Launch launchInfo={launch} onClickLaunch={onClickLaunch} index={i} key={i} />)}
      {!launches.length && <span style={{fontSize: '12px'}}>No launches for<br/>this timeline</span>}
    </div>
  );
}

