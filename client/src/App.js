import React, { useState, useEffect } from 'react';
import './App.css';
import TimelineSlider from './components/TimelineSlider';
import Timeline from './components/Timeline';
import LaunchDetails from './components/LaunchDetails';
import RequestTimeView from './components/RequestTimeView';

export default function App() {
  const [rangePoints, setRangePoints] = useState([-135, -25]);
  const [launches, setLaunches] = useState([]);
  const [featuredLaunch, setFeaturedLaunch] = useState();
  const [requestTimes, setRequestTimes] = useState({
    sent: null, recieved: null, roundTrip: null
  });

  useEffect(() => fetchLaunches(), []);

  function onChangeSlider(e, index) {
    const arr = [...rangePoints];
    arr[index] = parseInt(e.target.value);
    setRangePoints(arr);
  }

  function onClickLaunch(e, index) {
    const images = launches[index].flickr_images;
    setFeaturedLaunch({
      imageSrc: images[Math.floor(Math.random() * images.length)]
    });
  }

  const onMouseUpSlider = e => fetchLaunches();

  function fetchLaunches() {
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
        setLaunches(json.spacex.map(launch => {
          return {
            flight_number: launch.flight_number,
            mission_name: launch.mission_name,
            launch_date_utc: launch.launch_date_utc,
            rocket_name: launch.rocket.rocket_name,
            launch_success: launch.launch_success,
            flickr_images: launch.links.flickr_images
          };
        }));
        setFeaturedLaunch(null);
        setRequestTimes({
          sent: json.time.sent,
          recieved: json.time.recieved,
          roundTrip: endTime - startTime
        });
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <Timeline launches={launches} onClickLaunch={onClickLaunch} />
      { featuredLaunch && <LaunchDetails imageSrc={featuredLaunch.imageSrc} /> }
      <RequestTimeView sent={requestTimes.sent}
                       recieved={requestTimes.recieved}
                       roundTrip={requestTimes.roundTrip}
      />
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

export const darkGrey = '#1B2631';

