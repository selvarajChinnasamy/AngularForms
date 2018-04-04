var nodemailer = require('nodemailer');
var http = require('http');
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.post('/sendmail', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: req.body.email,
            pass: req.body.password
        }
    });

    var mailOptions = {
        from: req.body.email,
        to: req.body.email1,
        subject: req.body.subject,
        text: req.body.text,
    };
    res.setHeader("Content-Type", "text/json");
    res.setHeader("Access-Control-Allow-Origin", "*");

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            var store = JSON.stringify({ code: '300', message: error  });
            res.end(store)
        } else {
            var store = JSON.stringify({ code: '200', message: info });
            res.end(store)
        }
    });
})


const PORT = 9000;

 app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
  });

