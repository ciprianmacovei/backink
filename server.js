const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.post('/email', (req,res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'macoveiciprian91@gmail.com',
            pass: 'ciprianMacovei12'
        }
    });

    const obj = {
        from: 'Customer from blackInk <noReaply@blackInk.com>', // sender address
        to: 'macoveiciprian91@gmail.com',
        cc: `${req.body.email}`,
        subject: req.body.subject, // Subject line
        text: req.body.text, // plain text body
        html: `<b>${req.body.text}</b>` // html body
    };

    transporter.sendMail(obj, (error, info)=>{
        if (error) {
            console.log(error);
            res.json({data:false})
        } else {
            console.log('Email sent');
            res.json({data:true})
        }
    });
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
