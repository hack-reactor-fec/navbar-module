const express = require('express');
const parser = require('body-parser');
const utils = require('../db/utils.js');
const cors = require('cors');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(parser.json());
app.use(cors());

app.get('/api/navbar/:id', (req, res) => {
  utils.loadProject(req.params.id, (result) => {
    console.log('Loaded project');
    res.json(result);
  });
});

app.put('/api/navbar/:id', (req, res) => {
  utils.updateRemindList(req.body.email, req.params.id, (result) => {
    console.log('Saved email');
    res.json(result.reminders.pop());
  });
});

const PORT = (process.env.PORT || 3002);

app.listen(PORT, console.log('Listening to port:', PORT));
