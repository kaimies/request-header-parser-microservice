const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const acceptedLanguages = req.headers['accept-language'];
  const language = acceptedLanguages.split(',')[0] || '';

  const userAgent = req.headers['user-agent'];
  const operatingSystem = userAgent.match(/\((.*?)\)/)[1] || '';

  res.json({
    ipaddress: req.ip,
    language: language,
    software: operatingSystem,
  })
});

const port = process.env.PORT || 8080;

app.listen(port);
