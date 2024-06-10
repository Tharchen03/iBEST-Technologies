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

var onloadCallback = function() {
    grecaptcha.render('your-recaptcha-element-id', {
        'sitekey' : '6LcqBvUpAAAAAHeTNv4gitbasAqRC2kIprfgc59Y'
    });
};

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

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message, recaptchaResponse }),
        });

        const responseData = await response.json(); // Parse response data as JSON

        const resetForm = () => {
            document.getElementById('contactForm').reset();
            grecaptcha.reset();
        };

        if (responseData.captchaSuccess) { // Check if captchaSuccess is true
            if (response.ok) {
                Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: "Your message has been sent",
                    showConfirmButton: false,
                    timer: 5500
                });
                resetForm();
            } else {
                const errorMessage = await response.text();
                Swal.fire({
                    position: "bottom-end",
                    icon: "error",
                    title: `Failed to send message: ${errorMessage}`,
                    showConfirmButton: false,
                    timer: 5500
                });
                resetForm();
            }
        } else {
            Swal.fire({
                position: "bottom-end",
                icon: "error",
                title: "CAPTCHA verification failed",
                showConfirmButton: false,
                timer: 5500
            });
            resetForm();
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            position: "bottom-end",
            icon: "error",
            title: 'Failed to send message. Please try again later.',
            showConfirmButton: false,
            timer: 5500
        });
        resetForm();
    }
}


