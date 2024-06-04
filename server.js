const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: '*' // Allow requests from any origin
}));

// Route to handle email sending
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sherabten098@gmail.com', // Your email
            pass: 'nbtmaododziusfxq',        // Your email password or app password
        },
    });

    // Mail options
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
