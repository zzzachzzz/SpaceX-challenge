import React from 'react';
import { darkGrey } from '../App';

export default function RequestTimeView({sent, recieved, roundTrip}) {
  const requestTimeViewStyle = {
    background: darkGrey, position: 'absolute', top: '15px', right: '15px',
    borderRadius: '20px', fontSize: '12px', padding: '8px'
  };

  return (
    <div style={requestTimeViewStyle}>
      <p>Request sent to SpaceX API at {sent || '...'}</p>
      <p>Request recieved from SpaceX API at {recieved || '...'}</p>
      <p>Total roundtrip duration of {roundTrip || '...'}ms</p>
    </div>
  );
}

