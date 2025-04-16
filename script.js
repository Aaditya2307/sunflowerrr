document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    alert('Your message has been sent: ' + message);
    document.getElementById('message').value = ''; // Clear the textarea
});