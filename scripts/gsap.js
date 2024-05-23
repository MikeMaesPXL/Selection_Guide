//Buttons color
const buttons = document.querySelectorAll('.general_style_button');

buttons.forEach(button => {
    const hoverAnimation = gsap.to(button, {
        background: `linear-gradient(to right, #ffca1d 100%, transparent 100%)`,
        backgroundSize: '200% 100%',
        duration: 0.4,
        ease: 'power2.inOut', 
        paused: true,
    });

    button.addEventListener('mouseenter', () => {
        hoverAnimation.play(); 
    });

    button.addEventListener('mouseleave', () => {
        hoverAnimation.reverse();
    });
});