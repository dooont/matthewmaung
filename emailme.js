const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Replace with your email config
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your.email@gmail.com',
        pass: 'yourpassword'
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
        from: email,
        to: 'matthewmaung@nyu.edu', // Replace with your email
        subject: `New Contact from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success'); 
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
