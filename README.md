# SpaceX Challenge
![screenshot](https://raw.githubusercontent.com/zzzachzzz/SpaceX-challenge/master/screenshot.png)
## Setup
From `SpaceX-challenge/client`
1. `npm i`
2. `npm start`

From `SpaceX-challenge/server`

3. `npm i`
4. `node index.js`

In your browser

5. Visit `http://localhost:3000`

## About
- Requests are made on inital render and `onMouseUp` for the range sliders.
- The range sliders function regardless of which value is greater, the left or the right. The oldest date will be used as the starting range point, and the most recent date will be used as the ending range point.
- Upon clicking on a launch from the left panel, a randomized photo of the launch is displayed. A green or red launch tile indicates if the rocket launch was successful.
