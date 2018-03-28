const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controller/books_controller.js');

const app = express();
let port = 3000;

app.use(express.static(__dirname + '/../build'));
app.use(bodyParser.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

app.listen(port, (request, response) => {
  console.log('I am listening on port: ' + port);
});
