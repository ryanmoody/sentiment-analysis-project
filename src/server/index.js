const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');
const mockAPIResponse = require('./mockAPI.js');

dotenv.config();

const app = express();
const port = 8081;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.post('/api', (req, res) => {
  const { input } = req.body;
  const BASE_URL = 'api.meaningcloud.com';
  
  axios.post(`https://${BASE_URL}/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${input}`, {
      'maxRedirects': 20
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post('/test', (req, res) => {
  res.send(mockAPIResponse);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
