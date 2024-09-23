// Example: Simple email validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        event.preventDefault(); // Prevent form submission
    }
});
