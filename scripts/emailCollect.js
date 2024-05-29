(function(){
    emailjs.init("hJNYULwkA1d_Lu9Ln"); // EmailJS user ID
})();

document.getElementById('details_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const bericht = document.getElementById('bericht').value;
    const sol = document.getElementById('sol_text');
    const publilemon_email = 'publilemonquiz@gmail.com';
    const solutionNumber = document.getElementById('solution_number').value;

    if (email) {
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
                // alert('We hebben jouw bericht ontvangen!');
                sol.textContent = "We hebben jouw bericht ontvangen!";
                sol.style.color = "green";
                setTimeout(() => {
                    window.location.href = `../../html/uitkomsten/uitkomst${solutionNumber}.html`;
                }, 3000);
            }, function(error) {
                console.log('Jouw bericht is niet verzonden...', error);
                // alert('Jouw bericht is niet verzonden...');
                sol.textContent = "Jouw bericht is niet verzonden...";
                sol.style.color = "red";
                setTimeout(() => {
                    window.location.href = `../../html/uitkomsten/uitkomst${solutionNumber}.html`;
                }, 3000);
            });
    }
});
