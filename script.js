// ✅ Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);


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
 
    gsap.to(bg,{
        x:`${x*0.4}%`,

    })
    gsap.to(textCrew,{
        x:`${x*0.4}%`
    })
    
  });

// ✅ 1. Setup FAQ Accordion
function setupFAQToggle() {
  document.querySelectorAll('.faq1-item').forEach(item => {
    const question = item.querySelector('.faq1-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

// ✅ 2. Setup GSAP Scroll Animations
function setupScrollAnimations() {
  gsap.to(".imgscollor .box", {
    x: "-70%",
    scrollTrigger: {
      trigger: ".imgscollor",
      scroller: "body",
      start: "top 20%",
      end: "top -150%",
      scrub: 2,
      pin: true
    }
  });

  gsap.to(".head h1", {
    x: "-50%",
    scrollTrigger: {
      trigger: ".head",
      scroller: "body",
      start: "top 100%",
      end: "top -150%",
      scrub: 2
    }
  });

  gsap.to(".head2 h1", {
    x: "20%",
    scrollTrigger: {
      trigger: ".head2",
      scroller: "body",
      start: "top 50%",
      end: "top -150%",
      scrub: 2
    }
  });
}

// ✅ 3. Split Text into Words
function splitWords(selector) {
  const element = document.querySelector(selector);
  const words = element.innerText.split(" ");
  element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");
}

// ✅ 4. Setup Reveal Text Animation
function setupRevealTextAnimations() {
  splitWords("#reveal-text");
  splitWords("#reveal-text2");

  gsap.to("#reveal-text .word", {
    color: "#fff",
    opacity: 1,
    stagger: 0.5,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#reveal-text",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      
    }
  });

  gsap.to("#reveal-text2 .word", {
    color: "#fff",
    opacity: 1,
    stagger: 0.5,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#reveal-text2",
      start: "top 70%",
      end: "top 60%",
      scrub: 2,
     
    }
  });
}

// ✅ 5. Setup Custom Cursor Trail
function setupCursorInteractions() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".cursor");

  circles.forEach(circle => {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener("mousemove", e => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      circle.x = x;
      circle.y = y;
      circle.style.scale = (circles.length - index) / circles.length;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.1;
      y += (nextCircle.y - y) * 0.1;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
}

// ✅ 6. Setup Navbar Hide on Scroll
function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      navbar.style.top = "-100%";
    } else {
      navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
  });
}

// ✅ Init All
function initCodeCrewScripts() {
  setupFAQToggle();
  setupScrollAnimations();
  setupRevealTextAnimations();
  setupCursorInteractions();
  setupNavbarScroll();
 
}

const menuIcon = document.querySelector(".ri-menu-3-line");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
  }
  lastScrollY = window.scrollY;
});

document.addEventListener("DOMContentLoaded", initCodeCrewScripts);

