(function(){
    emailjs.init("hJNYULwkA1d_Lu9Ln"); // EmailJS user ID
})();

document.getElementById('details_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const bericht = document.getElementById('bericht').value;
    const publilemon_email = 'publilemonquiz@gmail.com';

    if (email && bericht) {
        const serviceID = 'service_a8bbx3a'; // EmailJS service ID
        const templateID = 'template_kik2h3a'; // EmailJS template ID

        const templateParams = {
            to_email: publilemon_email,
            from_email: email,
            bericht: bericht
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('We hebben jouw bericht ontvangen!');
                window.location.href = '../../html/uitkomsten/uitkomst1.html';
            }, function(error) {
                console.log('Jouw bericht is niet verzonden...', error);
                alert('Jouw bericht is niet verzonden...');
                window.location.href = '../../html/uitkomsten/uitkomst1.html'
            });
    }
});
