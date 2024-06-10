
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.post('/send-email', async (req, res) => {

    const params = new URLSearchParams({
        secret:"6LcqBvUpAAAAACmV_fWz8jv1qRZER9x2kvV7z71m",
        response:req.body[g-recaptcha-response],
        remoreip:req.ip,
    })
    fetch('https://www.google.com/recaptcha/api/siteverify',{
        method:'POST',
        body:params,
    }).then(res => res.json())
       .then(data => {
        if(data.success){
            res.json({captchaSuccess:true});
        }else{
            res.json({captchaSuccess:true});
        }
       });
    const { name, email, message } = req.body;

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sherabten098@gmail.com', // Your email
            pass: 'nbtmaododziusfxq',        // Your email password or app password
        },
    });

    // Mail optionsj
    const mailOptions = {
        from: 'sherabten098@gmail.com',
        to: 'cocodon098@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors({
//     origin: '*'
// }));

// app.post('/send-email', async (req, res) => {
//     const { name, email, message, recaptchaResponse } = req.body;

//     const fetch = await import('node-fetch').then(mod => mod.default);

//     const secretKey = '6LcqBvUpAAAAACmV_fWz8jv1qRZER9x2kvV7z71m';
//     const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

//     try {
//         const recaptchaVerificationResponse = await fetch(verificationUrl, {
//             method: 'POST'
//         });
//         const recaptchaData = await recaptchaVerificationResponse.json();

//         console.log('reCAPTCHA Verification Response:', recaptchaData);

//         if (!recaptchaData.success) {
//             return res.status(400).send('Failed reCAPTCHA verification');
//         }
//     } catch (error) {
//         console.error('Error verifying reCAPTCHA:', error);
//         return res.status(500).send('Failed to verify reCAPTCHA');
//     }

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'sherabten098@gmail.com',
//             pass: 'nbtmaododziusfxq',
//         },
//     });

//     // Mail options
//     const mailOptions = {
//         from: 'sherabten098@gmail.com',
//         to: 'cocodon098@gmail.com',
//         subject: `Contact form submission from ${name}`,
//         text: `You have received a new message from ${name} (${email}):\n\n${message}`,
//     };

//     // Send email
//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Failed to send email');
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });