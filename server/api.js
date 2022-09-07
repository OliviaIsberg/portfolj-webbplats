const path = require('path');
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { runInNewContext } = require('vm');

const port = 5000;

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

function saveData() {
  fs.writeFileSync('data.json', JSON.stringify(data));
}

app.get('/api/users', (req, res) => {
  res.json(data.users);
});

app.get('/api/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const users = data.users.find((user) => user.id === id);
  if (users === undefined) {
    res.status(404);
    res.json({ error: 'User not found' });
    return;
  }

  res.json(users);
});

app.post('/api/user', (req, res) => {
  const userIds = data.users.map((user) => user.id);
  const userId = Math.max(...userIds) + 1;
  const user = { id: userId, ...req.body };
  data.users.push(user);
  saveData();
  res.json(user);
});

app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isValidUser = data.users.some(
    (user) => user.email == email && user.password == password
  );
  if (isValidUser) {
    res.status(200);
  } else {
    res.status(401);
  }
  res.send();
});

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log('Running on port ' + port);
});
