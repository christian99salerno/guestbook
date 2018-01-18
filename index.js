//MOD HTTP
//const http = require('http');

/*const server = http.createServer( function (req, res) {
res.end("Ciao");

});
*/

//MOD EXPRESS

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express ();

//console.log(path.resolve(__dirname, 'public'));

//app.use( function (req, res, next) {
//console.log("Connessione Riuscita", req.method, new Date());
//next();
//});

const commenti = [
{title:"Ciao",
 body:"come stai?",
 date:new Date()
}
];

app.use(bodyParser.urlencoded({extended:false}));

app.use( morgan('dev') );

app.use( '/js', express.static(path.resolve(__dirname, 'js')));
app.use( '/css', express.static(path.resolve(__dirname, 'css')));
app.use( '/img', express.static(path.resolve(__dirname, 'img')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {   
  res.render('index', {commenti: commenti});
});

app.get('/comment', function (req, res) {
  res.render('comment');
});

app.post('/comment', function (req, res) {
  console.log(req.body.title);
  console.log(req.body.body);
  res.redirect('/');
});

app.use( function (req, res) {
res.status(404);
res.end('Page Not Found');
});

app.listen(3000);
