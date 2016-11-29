var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
//var nodemailer =  require('nodemailer');
//var hbs = require('nodemailers-express-handlebars');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user: 'aryan574',
    database: 'aryan574',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

/*var mailer = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 465,
    secure: true,
    auth: {
        user: 'postmaster@sandboxfa4ff40c8cf04c6aa5f3df97e7ad41dd.mailgun.org',
        pass: '76ca122875f2f399244e5374b32a5cb0'
    }
});*/
var pool = new Pool(config);
/*mailer.use('compile', hsb({
    viewPath:'view/email',
    extName: '.hbs'
}));*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'logo.png'));
});

app.get('/ui/background.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'background.jpg'));
});

app.get('/ui/typewriter.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'typewriter.js'));
});

app.get('/portfolio', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'portfolio.html'));
});

app.get('/ui/linkedin.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.png'));
});

app.get('/ui/twitter.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'twitter.png'));
});

app.get('/ui/facebook.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'facebook.png'));
});

app.get('/ui/github.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'github.png'));
});

app.get('/ui/businessman.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'businessman.png'));
});

app.get('/ui/engineer.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'engineer.png'));
});

app.get('/ui/scientist.png', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'scientist.png'));
});

app.get('/ui/header-bg.jpg', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'header-bg.jpg'));
});

var  urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/contact', urlencodedParser, function(req, res){
    /*var mailOptions = {
    from: req.body.email, // sender address
    to: 'sangamsingh.1994@gmail.com', // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plaintext body
    };
    mailer.sendMail(mailOptions, function(error, info){
    if(error){
       res.send(error);
    }
    res.send(info.response);
    });*/
    pool.query("INSERT INTO CONTACT_INFO(Serial_No)")
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
