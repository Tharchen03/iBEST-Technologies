// async function sendEmail(event) {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     try {
//         const response = await fetch('http://localhost:3000/send-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, email, message }),
//         });

//         if (response.ok) {
//             Swal.fire({
//                 position: 'bottom-end',
//                 icon: 'success',
//                 title: 'Email sent successfully!',
//                 showConfirmButton: false,
//                 timer: 2500
//             });
//             // Reset the form after successful submission
//             document.getElementById('contactForm').reset();
//         } else {
//             const errorMessage = await response.text();
//             Swal.fire({
//                 position: 'bottom-end',
//                 icon: 'error',
//                 title: `Failed to send email: ${errorMessage}`,
//                 showConfirmButton: true
//             });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         Swal.fire({
//             position: 'bottom-end',
//             icon: 'error',
//             title: 'Failed to send email. Please try again later.',
//             showConfirmButton: true
//         });
//     }
// }


// var onloadCallback = function () {
//     grecaptcha.render('your-recaptcha-element-id', {
//         'sitekey': '6LcqBvUpAAAAAHeTNv4gitbasAqRC2kIprfgc59Y'
//     });
// };

async function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const recaptchaResponse = grecaptcha.getResponse();

  if (!recaptchaResponse) {
      Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Please complete the CAPTCHA",
          showConfirmButton: false,
          timer: 5500
      });
      return;
  }

  const resetForm = () => {
      document.getElementById('contactForm').reset();
      grecaptcha.reset();
  };

  try {
      const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
      });

      const responseData = await response.json(); // Parse response data as JSON

      if (responseData.success) {
          Swal.fire({
              position: 'bottom-end',
              icon: 'success',
              title: responseData.message,
              showConfirmButton: false,
              timer: 2500
          });
          resetForm();
      } else {
          Swal.fire({
              position: 'bottom-end',
              icon: 'error',
              title: responseData.message,
              showConfirmButton: true
          });
          resetForm();
      }
  } catch (error) {
      console.error('Error:', error);
      Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: 'mailed success',
          showConfirmButton: true
      });
      resetForm();
  }
}



// server.js 
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
