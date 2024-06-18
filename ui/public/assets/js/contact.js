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
        const response = await fetch('/send-email', { // Update URL to Laravel endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', // Ensure Laravel returns JSON
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // CSRF token
            },
            body: JSON.stringify({
                fullname: name,
                email_id: email,
                message: message,
                'g-recaptcha-response': recaptchaResponse
            }),
        });

        const responseData = await response.json(); // Parse response data as JSON

        if (response.ok && responseData.success) {
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
                title: responseData.message || 'Failed to send email',
                showConfirmButton: true
            });
        }
    } catch (error) {
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'An error occurred while sending email',
            showConfirmButton: true
        });
    }
}
