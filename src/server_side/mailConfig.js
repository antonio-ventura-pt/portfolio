const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// configure body-parser middleware to parse request body as form data
app.use(bodyParser.urlencoded({ extended: false }));

// configure nodemailer transport with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    oauth2: {
        user: 'antonio.ventura.pt@gmail.com',
        pass: 'antonioventura'
    }
});

// handle POST requests to /submit-form
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // check if any of the form fields are empty
    const isFormValid = Object.values(formData).every(value => Boolean(value));
    if (!isFormValid) {
        res.status(400).send('One or more form fields are empty');
        return;
    }

    // create email message with form data
    const message = {
        from: `${formData.email}`,
        to: 'antonio.ventura.pt@gmail.com',
        subject: 'Mensagem do site portfolio',
        text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
              `
    };

    // send email message using nodemailer
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Form submitted successfully');
        }
    });
});

// start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
