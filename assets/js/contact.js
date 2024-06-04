async function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: 'Email sent successfully!',
                showConfirmButton: false,
                timer: 2500
            });
            // Reset the form after successful submission
            document.getElementById('contactForm').reset();
        } else {
            const errorMessage = await response.text();
            Swal.fire({
                position: 'bottom-end',
                icon: 'error',
                title: `Failed to send email: ${errorMessage}`,
                showConfirmButton: true
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Failed to send email. Please try again later.',
            showConfirmButton: true
        });
    }
}
