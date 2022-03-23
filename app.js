const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.status(200).send({
    mesagem: 'Ok, está dando tudo certo'
  });
});

module.exports = app;