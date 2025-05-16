const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This user management server is running!!!!');
});

app.post('/users', (req, res) => {
  console.log('This is post method.');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
// add new user id
  users.push(newUser);
  res.send(newUser);
});

const users = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com' },
  { id: 2, name: 'Lima Doe', email: 'lima@gmail.com' },
  { id: 3, name: 'Hern Doe', email: 'hern@gmail.com' },
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`This server is running on Port ${port}`);
});
