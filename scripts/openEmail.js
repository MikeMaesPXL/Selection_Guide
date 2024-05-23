//Open default email setting upon clicking text
const email = document.getElementById('email_click');
    email.addEventListener('click', function() {
        window.location.href = 'mailto:hello@publilemon.be';
    });