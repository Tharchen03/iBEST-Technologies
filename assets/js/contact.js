async function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageContainer = document.getElementById('messageContainer');

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            messageContainer.textContent = 'Email sent successfully!';
            document.getElementById('contactForm').reset();

        } else {
            const errorMessage = await response.text();
            messageContainer.textContent = `Failed to send email: ${errorMessage}`;
        }
    } catch (error) {
        console.error('Error:', error);
        messageContainer.textContent = 'Failed to send email. Please try again later.';
    }
}
