const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', async(req, res) => {
    res.render('home');
})

app.listen(3000, ()=> 'server started at port 3000');