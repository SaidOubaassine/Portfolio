document.addEventListener("DOMContentLoaded", () => {
  // Initialize Particles.js
  const initParticles = () => {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  };

  // Toggle the header style based on scroll position
  const initHeaderScrollToggle = () => {
    const header = document.querySelector(".header-citadel");
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  };

  // Reveal elements when they appear in the viewport using Intersection Observer
  const initScrollReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.25 }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
  };

  // Enable smooth scrolling for internal navigation links
  const initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  };

  // Toggle between light and dark themes
  const initThemeToggle = () => {
    const toggleThemeBtn = document.getElementById("toggleTheme");
    if (toggleThemeBtn) {
      toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
      });
    }
  };

  // Add flip animation for interactive project cards
  const initProjectCardFlip = () => {
    document.querySelectorAll(".more-info").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = button.closest(".project-card");
        if (card) card.classList.add("flipped");
      });
    });
    document.querySelectorAll(".flip-back").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = button.closest(".project-card");
        if (card) card.classList.remove("flipped");
      });
    });
  };

  // Initialize CodeMirror for the Live Code Editor
  const initCodeMirror = () => {
    const editorElement = document.getElementById("demo-editor");
    if (editorElement) {
      CodeMirror.fromTextArea(editorElement, {
        lineNumbers: true,
        mode: "javascript",
        theme: "dracula",
      });
    }
  };

  // Execute all initialization functions
  initParticles();
  initHeaderScrollToggle();
  initScrollReveal();
  initSmoothScrolling();
  initThemeToggle();
  initProjectCardFlip();
  initCodeMirror();
});