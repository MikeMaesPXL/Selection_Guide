document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const errorMessage = document.getElementById('error_message');
    const nextButton = document.getElementById('next_button');
  
    nextButton.addEventListener('click', function () {
      let isAnswered = false;
  
      questions.forEach(function (question) {
        if (question.checked) {
          isAnswered = true;
  
          switch (question.dataset.answer) {
            // Question 1
            case 'yes_1':
              window.location.href = '../../html/collectEmails/collectEmails1.html';
              break;
            case 'no_1':
              window.location.href = '../../html/vragen/vraag2.html';
              break;
            // Question 2  
            case 'yes_2':
                window.location.href = '../../html/vragen/vraag3.html';
                break;
            case 'no_2':
                window.location.href = '../../html/vragen/vraag4.html';
                break;  
            // Question 3
            case 'yes_3':
                window.location.href = '../../html/collectEmails/collectEmails3.html';
                break;
            case 'no_3':
                window.location.href = '../../html/collectEmails/collectEmails4.html';
                break; 
            // Question 4
            case 'yes_4':
                window.location.href = '../../html/collectEmails/collectEmails2.html';
                break;
            case 'no_4':
                window.location.href = '../../html/collectEmails/collectEmails4.html';
                break;     
            default:
                console.error('Er is iets foutgelopen probeer opnieuw!');
                break;
          }
        }
      });
      
    // Check if any box is checked.
    if (!isAnswered) {
            errorMessage.textContent = 'Je moet een antwoord selecteren.';
        } else {
            errorMessage.textContent = '';
        }
    });
  
    // Check if one box is already checked, 
    // if true change the check when pressing the other. 
    questions.forEach(function (question) {
      question.addEventListener('click', function () {
        questions.forEach(function (otherQuestion) {
            if (otherQuestion !== question && otherQuestion.checked) {
                otherQuestion.checked = false;
            }
        })
      });
    });
  });
  