const request = require('request');
const express = require('express');

const baseUrl = 'https://api.spacexdata.com/v3';

const app = express();
const router = express.Router();
app.use('/api', router);  // Use 'api' as base url
router.use(express.json());

router.get('/launches', function(req, res) {
  let sentTime = getTime();
  request(`${baseUrl}/launches?start=${req.query.start}&end=${req.query.end}`, (err, response, body) => {
    let recievedTime = getTime();
    if (err || !response || response.statusCode !== 200) {
      console.error(err);
      res.sendStatus(400);
    } else {
      const json = JSON.parse(body);
      console.log(json);
      res.send(Object.assign({spacex: json}, {time: {sent: sentTime, recieved: recievedTime}}));
    }
  });
});

function getTime() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`;
}

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

