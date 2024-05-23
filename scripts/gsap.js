//Scroll
// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.animated_title_1',
//         start: '20% 77.66%',
//         end: '200% 53.33%',
//         scrub: true, 
//         markers: false
//     }
// });

// tl.to('.animated_title_1', {
//     x: 1200
// })

//Buttons color
const buttons = document.querySelectorAll('.general_style_button');

buttons.forEach(button => {
    const hoverAnimation = gsap.to(button, {
        background: `linear-gradient(to right, #ffca1d 100%, transparent 100%)`, // Define the hover background gradient
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