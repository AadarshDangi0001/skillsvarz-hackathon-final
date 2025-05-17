gsap.registerPlugin(ScrollTrigger);
// Image zoom-in on page load
gsap.to(".intro-img", {
  scale: 3,
  opacity: 1,
  duration: 2,
  ease: "power2.out",
});

// Smooth transition to main section
gsap.to(".intro", {
  delay: 2,
  y: "-100vh",
  duration: 1.2,
  ease: "power2.inOut",
  opacity:0
});
// Parallax effect on scroll
gsap.to(".parallax-container", {
  y: -100,
  scrollTrigger: {
    trigger: ".main",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

  const bg = document.querySelector('.cloud');
  let textCrew=document.querySelector(".textCrew");
  document.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 40;
    let y = (e.clientY / window.innerHeight - 0.5) * 40;
    // bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    // textCrew.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    gsap.to(bg,{
        x:`${x*0.4}%`,

    })
    gsap.to(textCrew,{
        x:`${x*0.4}%`
    })
    
  });