const express = require('express');
const bodyParser = require('body-parser');

const dbRoutes = require('./route/dbRoute.js')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/database', dbRoutes)
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});