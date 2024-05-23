if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $description = $_POST['description'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaSecretKey = 'YOUR_RECAPTCHA_SECRET_KEY';

    $recaptchaVerifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptchaResponseData = array(
        'secret' => $recaptchaSecretKey,
        'response' => $recaptchaResponse
    );

    $options = array(
        'http' => array ()
    )

    
}