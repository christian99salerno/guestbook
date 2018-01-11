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

const app = express ();
//console.log(path.resolve(__dirname, 'public'));

//app.use( function (req, res, next) {
//console.log("Connessione Riuscita", req.method, new Date());
//next();
//});

app.use( morgan('dev') );
app.use( '/js', express.static(path.resolve(__dirname, 'js')));
app.use( '/css', express.static(path.resolve(__dirname, 'css')));
app.use( '/img', express.static(path.resolve(__dirname, 'img')));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  //res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  res.render('index');
});

app.get('/test', function (req, res) {
  //res.sendFile(path.resolve(__dirname, 'public', 'test.html'));
  res.render('test');
});

app.use( function (req, res) {
res.status(404);
res.end('Page Not Found');
});

app.listen(3000);
