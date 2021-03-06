const express = require('express');

const app = express();

const successMessage = 'success';
const userData = {
  name: 'Sam',
  email: 'developer@yandex.com',
  isDeveloper: true,
  followersOnGithub: 12
};

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!')
});

app.post('/users', (req, res) => {
  res.status(201).send({
    message: successMessage,
    data: userData,
  });
});

module.exports = app;
