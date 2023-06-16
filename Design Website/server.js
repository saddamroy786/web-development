const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser')

const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extented: false}));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// render html files
app.engine('html', require('ejs').renderFile);

app.get('/',(req,res)=>{
res.render('gk.html', {message:'welcome to my page'});
});

app.listen(port,()=>{
console.log('webapp listening on port ');
});