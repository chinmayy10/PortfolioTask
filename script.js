// Hero Section Animation
gsap.from("#hero h2", { duration: 1.5, y: -50, opacity: 0 });
gsap.from("#hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });
gsap.from("#hero button", { duration: 1, scale: 0, opacity: 0, delay: 1 });

// Project Cards Animation
gsap.from(".project-card", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});
