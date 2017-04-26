const express = require('express');
const path    = require('path');
const logger  = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

require('./routes')(app);

app.use((req, res) => {
  res.status(404).render("404");
});

http.createServer(app).listen(3000, () => {
  console.log('GuestBook App started on port 3000');
});
