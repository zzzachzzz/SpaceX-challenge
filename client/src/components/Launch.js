import React from 'react';
import { darkGrey } from '../App';

export default function Launch(props) {
  const {flight_number, mission_name, launch_date_utc,
         rocket_name, launch_success} = props.launchInfo;

  const launchStyle = {
    background: launch_success ? '#ddffdd' : '#fee8e9', margin: '12px', padding: '10px',
    fontSize: '12px', cursor: 'pointer', height: '18%', borderRadius: '20px', color: darkGrey
  };

  return (
    <div onClick={e => props.onClickLaunch(e, props.index)} style={launchStyle}>
      <p>Flight #{flight_number}</p>
      <p>Mission: {mission_name}</p>
      <p>Rocket: {rocket_name}</p>
      <p>Launch date:<br/>{launch_date_utc}</p>
    </div>
  );
}

