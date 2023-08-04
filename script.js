


gsap.from('.right', 1.6, {
    delay: 0.6,
    // opacity: 0,
    // x: -20,
    width: 0,
    ease: Expo.easeInOut
});

gsap.from('.logo', 1, {
    delay: 1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

gsap.from('.next', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

gsap.from('.watch', 1, {
    delay: 1.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

gsap.from('.cart', 1, {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
});

gsap.from('.product-title', 2, {
    delay: 1.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

gsap.from('.desc', 2, {
    delay: 1.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

gsap.from('#price', 2, {
    delay: 2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

gsap.from('.btn', 2, {
    delay: 2.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

gsap.from('.right-sidebar ul li', 1, {
    stagger: 0.2,
    delay: 0.5,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.8);

gsap.from('.left-bottom', 2, {
    delay: 2.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

gsap.from('.media ul li', 1, {
    stagger: 0.4,
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.8);

gsap.from('.product img', 3, {
    delay: 2,
    // opacity: 0,
    // y: 20,
    scale: 0,
    ease: Expo.easeInOut
});

gsap.to('.product img', 3, {
    delay: 2,
    // opacity: 0,
    // y: 20,
    scale: 1,
    ease: Expo.easeInOut
});
