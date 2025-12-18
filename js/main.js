/* =========================
   MOBILE MENU
========================= */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });
}

/* =========================
   HEADER SCROLL EFFECT
========================= */
const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* =========================
   WELCOME CONFETTI (HOME ONLY)
========================= */
const welcomeArrow = document.getElementById("welcomeArrow");

if (welcomeArrow) {
  welcomeArrow.addEventListener("click", () => {
    if (sessionStorage.getItem("welcomeConfettiPlayed")) return;
    sessionStorage.setItem("welcomeConfettiPlayed", "true");

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.75 },
      colors: ["#ffffff", "#f0ede9", "#a35da1"],
      scalar: 0.9,
      ticks: 200,
    });
  });
}

/* =========================
   TESTIMONIALS (HOME ONLY)
========================= */
const imageEl = document.getElementById("testimonialImage");
const textEl = document.getElementById("testimonialText");
const authorEl = document.getElementById("testimonialAuthor");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

if (imageEl && textEl && authorEl && prevBtn && nextBtn) {
  let currentIndex = 0;

  const testimonials = [
    {
      image: "assets/images/client.jpg",
      text: "...",
      author: "FISAYO LONGE",
    },
    {
      image: "assets/images/maggi.jpg",
      text: "...",
      author: "EDIA UKO EBIGBEYI",
    },
  ];

  function updateTestimonial(index) {
    imageEl.classList.add("testimonial-fade-out");
    textEl.classList.add("testimonial-fade-out");
    authorEl.classList.add("testimonial-fade-out");

    setTimeout(() => {
      imageEl.src = testimonials[index].image;
      textEl.textContent = testimonials[index].text;
      authorEl.textContent = testimonials[index].author;

      imageEl.classList.remove("testimonial-fade-out");
      textEl.classList.remove("testimonial-fade-out");
      authorEl.classList.remove("testimonial-fade-out");
    }, 300);
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });
}

/* =========================
   GO TO TOP
========================= */
const goTopBtn = document.getElementById("goTop");

if (goTopBtn) {
  window.addEventListener("scroll", () => {
    goTopBtn.classList.toggle("show", window.scrollY > 400);
  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================
   WHO WE ARE HERO ROTATION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const bgA = document.getElementById("heroBgA");
  const bgB = document.getElementById("heroBgB");

  if (!bgA || !bgB) return;

  const images = [
    "assets/images/who-hero-1.jpg",
    "assets/images/who-hero-2.jpg",
    "assets/images/who-hero-3.jpg",
    "assets/images/who-hero-4.jpg",
    "assets/images/who-hero-5.jpg",
  ];

  let index = 0;
  let showingA = true;

  // Preload
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // Initial image
  bgA.style.backgroundImage = `url(${images[0]})`;
  bgA.classList.add("active", "zoom");

  setInterval(() => {
    const nextIndex = (index + 1) % images.length;
    const incoming = showingA ? bgB : bgA;
    const outgoing = showingA ? bgA : bgB;

    incoming.style.backgroundImage = `url(${images[nextIndex]})`;

    // Prepare incoming
    incoming.classList.add("active", "zoom");
    outgoing.classList.remove("active", "zoom");

    showingA = !showingA;
    index = nextIndex;
  }, 6000);
});

/* =========================
   CORE VALUES ANIMATIONS
========================= */
const coreBlocks = document.querySelectorAll(".core-block");

if (coreBlocks.length) {
  const coreObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          coreObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  coreBlocks.forEach((block) => coreObserver.observe(block));
}

/* =========================
   FEATURED IN SECTION
========================= */

const featuredSection = document.querySelector(".featured-in");

if (featuredSection) {
  const featuredObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        featuredSection.classList.add("in-view");
        featuredObserver.unobserve(featuredSection);
      }
    },
    { threshold: 0.3 }
  );

  featuredObserver.observe(featuredSection);
}

/* =========================
   VISIONARY SECTION
========================= */

const visionary = document.querySelector(".visionary");

if (visionary) {
  const visionaryObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visionary.classList.add("in-view");
        visionaryObserver.unobserve(visionary);
      }
    },
    { threshold: 0.3 }
  );

  visionaryObserver.observe(visionary);
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");

  if (!footer) return;

  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-visible");
        footerObserver.disconnect(); // cleaner than unobserve
      }
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px", // triggers slightly earlier
    }
  );

  footerObserver.observe(footer);
});

/* =========================
   GALLERY SECTION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const bgA = document.getElementById("visualBgA");
  const bgB = document.getElementById("visualBgB");

  if (!bgA || !bgB) return;

  const images = [
    "assets/images/visual-1.jpg",
    "assets/images/visual-2.jpg",
    "assets/images/visual-3.jpg",
    "assets/images/visual-4.jpg",
    "assets/images/visual-5.jpg",
  ];

  let current = 0;
  let showingA = true;

  // preload
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // initial state
  bgA.style.backgroundImage = `url(${images[0]})`;
  bgA.classList.add("active", "zoom");

  setInterval(() => {
    const next = (current + 1) % images.length;
    const show = showingA ? bgB : bgA;
    const hide = showingA ? bgA : bgB;

    show.style.backgroundImage = `url(${images[next]})`;
    show.classList.add("active", "zoom");

    hide.classList.remove("active", "zoom");

    current = next;
    showingA = !showingA;
  }, 6000);
});
