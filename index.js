const express = require('express');
const { scrapeLogic } = require('./scrapeLogic');
const app = express();
const port = process.env.PORT || 4444;

app.get('/scrape', (req, res) => {
  const url = req.query.url;
  scrapeLogic(res, url)
})


app.get('/', (req, res) => {
  res.send('ALL OK!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

