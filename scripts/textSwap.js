const textWrapper = document.querySelector('.about_text_wrapper');
const paragraphs = textWrapper.querySelectorAll('p');
let currentIndex = 0;
let intervalId;

function showNextParagraph() {
    gsap.set(paragraphs[currentIndex], { opacity: 0 });
    currentIndex = (currentIndex + 1) % paragraphs.length;
    gsap.to(paragraphs[currentIndex], { duration: 0.5, opacity: 1 });
}

function startRotation() {
    showNextParagraph();
    intervalId = setInterval(showNextParagraph, 1750);
}

function stopRotation() {
    clearInterval(intervalId);
}

function handleVisibilityChange() {
    if (document.hidden) {
        stopRotation();
        gsap.killTweensOf(paragraphs);
    } else {
        startRotation();
    }
}

document.addEventListener('visibilitychange', handleVisibilityChange, false);
startRotation();