const express = require('express');
const parser = require('body-parser');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(parser.json());

app.get('/api/navbar/:id', (req, res) => {
  console.log('inside get request handler with id:', req.params.id);
  res.end();
});

app.post('/api/navbar/', (req, res) => {
  console.log('inside post request handler with body:', req.body);
  res.end();
});

const PORT = (process.env.PORT || 4000);

app.listen(PORT, console.log('Listening to port:', PORT));
