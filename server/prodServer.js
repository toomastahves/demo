 'use strict';

let express = require('express');
let app = express();

//app.use(express.static(__dirname + '/../dist'));

app.get('/api', (req, res) => {
  res.send('api here');
});

app.listen(1338);
