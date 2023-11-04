const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public')); //voor plublieke berijkbare dingen (kan geen require gebruiken)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); // Replace with the path to your HTML file
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});