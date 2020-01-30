import React from 'react';
import Launch from './Launch';

export default function Timeline(props) {
  let launches = [1,2,3,4];
  launches = [];
  return (
    <div style={{position: 'absolute', left: 0, height: '100%', width: '20%', backgroundColor: '#1B2631'}}>
      {launches.map((_, i) => <Launch key={i} />)}
      {!launches.length && <span style={{fontSize: '12px'}}>No launches for<br/>this timeline</span>}
    </div>
  );
}

