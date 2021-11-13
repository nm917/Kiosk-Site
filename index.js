const express = require('express'); 
const bodyParser = require('body-parser');  

const app = express(); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.listen(3000, () => console.log('server started'));
