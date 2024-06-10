// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors({
//     origin: '*' // Allow requests from any origin
// }));

// // Route to handle email sending
// app.post('/send-email', async (req, res) => {
//     const { name, email, message } = req.body;

//     // Nodemailer transporter setup
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'sherabten098@gmail.com', // Your email
//             pass: 'nbtmaododziusfxq',        // Your email password or app password
//         },
//     });

//     // Mail optionsj
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

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const reCAPTCHA = require('express-recaptcha');

// const app = express();
// const port = 3000;
// const dotenv = require('dotenv');
// dotenv.config();

// const secretKey = process.env.RECAPTCHA_SECRET_KEY;
// const recaptcha = new reCAPTCHA(secretKey, { verbose: true });

// app.use(bodyParser.json());
// app.use(cors({ origin: '*' }));  // Allow requests from any origin (adjust for production)

// app.post('/send-email', recaptcha.middleware.verify, async (req, res) => {
//     const { name, email, message } = req.body;

//     // Validate user input (consider using validator library)

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'sherabten098@gmail.com',
//             pass: 'nbtmaododziusfxq',
//         },
//     });

//     const mailOptions = {
//         from: 'sherabten098@gmail.com',
//         to: 'cocodon098@gmail.com',
//         subject: `Contact form submission from ${name}`,
//         text: `You have received a new message from ${name} (${email}):\n\n${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Failed to send email');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { RecaptchaV2 } = require('express-recaptcha');

const app = express();
const port = 3000;

dotenv.config();

const recaptcha = new RecaptchaV2({
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    secretKey: process.env.RECAPTCHA_SECRET_KEY,
});

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.post('/send-email', recaptcha.middleware.verify, async (req, res) => {
    if (!req.recaptcha.error) {
        const { name, email, message } = req.body;

        // Validate user input (consider using validator library)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sherabten098@gmail.com',
                pass: 'nbtmaododziusfxq',
            },
        });

        const mailOptions = {
            from: 'sherabten098@gmail.com',
            to: 'cocodon098@gmail.com',
            subject: `Contact form submission from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send email');
        }
    } else {
        res.status(400).send('reCAPTCHA verification failed');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
