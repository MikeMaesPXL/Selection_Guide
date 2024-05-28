//Buttons color
const buttons = document.querySelectorAll('.general_style_button');

buttons.forEach(button => {
    const hoverAnimation = gsap.to(button, {
        background: `linear-gradient(to top, #ffca1d 100%, transparent 100%)`,
        backgroundSize: '200% 100%',
        duration: 0.5,
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


//Contact text fade and slide
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".contact_content_left", {
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power4.out",
        delay: 0.4
    });

    gsap.from(".contact_content_right", {
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power4.out",
        delay: 0.8
    });
});


//Landing page
document.addEventListener("DOMContentLoaded", function() {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out", opacity: 0 } });

    // Animate the text first
    tl.from(".landing_title", { y: 80 });

    // Animate the other elements at the same time
    tl.from(".landing_text", { x: -80 }, "-=0.5")
      .from(".start_guide_button", { x: -100 }, "-=0.5")
      .from(".arrow", { x: -100 }, "-=0.5");

    // Arrow shake animation on hover
    const arrow = document.querySelector('.arrow');

    const shakeAnimation = gsap.to(arrow, {
        x: 7, 
        duration: 0.2, 
        ease: "power1.inOut",
        yoyo: true,
        repeat: 3,
        paused: true,
        onComplete: () => shakeAnimation.pause().progress(0)
    });

    arrow.addEventListener('mouseenter', () => {
        shakeAnimation.restart();
    });
    arrow.addEventListener('mouseleave', () => {
        shakeAnimation.pause().progress(0);
    });
});

//Slide in content - asset
document.addEventListener("DOMContentLoaded", function() {
    function animateSection(content, asset) {
        gsap.fromTo(content, 
            { 
                opacity: 0, 
                x: -100 
            },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.75, 
                scrollTrigger: {
                    trigger: content,
                    start: "top 60%",
                    end: "top 40%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(asset, 
            { 
                opacity: 0, 
                x: 100 
            },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.75, 
                scrollTrigger: {
                    trigger: asset,
                    start: "top 60%",
                    end: "top 40%",
                    toggleActions: "play none none none"
                }
            }
        );
    }

    animateSection(".wrapper_left_content", ".wrapper_left_assets");
    animateSection(".wrapper_right_content", ".wrapper_right_assets");
    animateSection(".about_container", ".about_asset");
});

