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

    const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            message
        }),
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
}