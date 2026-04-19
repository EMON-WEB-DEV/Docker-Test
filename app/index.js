const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const os = require('os');

const hostname =  process.env.HOSTNAME || os.hostname();
const platform = process.env.PLATFORM || os.platform();


app.get('/', (req, res) => {
  res.send(`Hello Docker! ${hostname} is running on ${platform}.`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
