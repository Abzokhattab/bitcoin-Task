// server/server.js
const express = require('express');
const axios = require ('axios');
const bodyParser = require('body-parser');
const request = require ('request');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));






const url='https://api.coindesk.com/v1/bpi/historical/close.json?start=2015-09-20&end=2016-09-05'
var  data=
request({ url: url, json: true }, (error, response) => {

})
console.log (data)


app.post('/abzo', (req, res) => {

res.send("12");
});


app.get('/events', (req, res) => {
    res.send(events);
  });
// listen on the port
app.listen(port);