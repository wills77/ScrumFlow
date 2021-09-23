const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./routes/api.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', apiRouter);



app.get('/', (req, res) => {
  console.log('hello app.get server side');
  res.send(res.body);
});


app.use(express.static(path.resolve(__dirname, '../src')));

/**
 * configire express global error handler 
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
  const defaultErr = 
  {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred'}
  };
  const errorObj = Object.assign(defaultErr, err);
  console.error(errorObj.log);
  res.status(errorObj.status).send(errorObj.message.err);
});

app.listen(port, () => {
  console.log(`listenening on port: ${port}`);
});

module.exports = app;
