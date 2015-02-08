var express = require('express');
var app = express();
var aws = require('aws-sdk');
aws.config.loadFromPath('config.json');
var ses = new aws.SES({apiVersion: '2010-12-01'});
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/work', function(req, res) {
    res.render('work');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/services', function(req, res) {
    res.render('services');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.post('/send', function(req, res) {

    data = req.param('data');
    var message = data.name + "\n" + data.email +  "\n" + data.message;

    // send to list
    var to = ['info@pragmati.co.uk']

    // this must relate to a verified SES account
    var from = 'info@pragmati.co.uk';

    // this sends the email
    // @todo - add HTML version
    ses.sendEmail(
        {
            Source: from,
            Destination: { ToAddresses: to },
            Message: {
                Subject: {
                    Data: 'Message from pragmati.co.uk'
                },
                Body: {
                    Text: {
                        Data: message,
                    }
                }
            }
        }
    , function(err, data) {
        if(err) throw err
    });
    res.render('sent');
});

app.listen(3000);
