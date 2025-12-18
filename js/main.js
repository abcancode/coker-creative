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
   TESTIMONIALS (SAFE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const imageEl = document.getElementById("testimonialImage");
  const textEl = document.getElementById("testimonialText");
  const authorEl = document.getElementById("testimonialAuthor");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  if (!imageEl || !textEl || !authorEl || !prevBtn || !nextBtn) return;

  const testimonials = [
    {
      image: "assets/images/client.jpg",
      text: "Working with Gozie on the KAI Collective Houston Sample Sale was an absolute masterclass in proactive, creative and thoughtful execution. She anticipated needs before they arose, communicated with clarity and confidence, and ran every detail with calm precision. Her level of organization, creativity and initiative has genuinely raised the bar for how we approach events going forward, and our standards have been upped forever as a result. We cannot wait to work with Coker Creative again!!",
      author: "FISAYO LONGE",
    },
    {
      image: "assets/images/CLIENT.jpg",
      text: "I knew from the start that I wanted Gozie and Coker Creative to plan our wedding, and she exceeded every expectation. She made me feel completely at ease, truly heard, and confidently supported throughout the process. Gozie is a creative genius—calm, solutions-oriented, and incredibly thoughtful in every detail, from vendor recommendations to guest experience. Her clear communication, organized timelines, and attention to detail made everything seamless. Choosing Coker Creative was the best decision we made for our destination wedding, and I would recommend her to anyone planning an event.",
      author: "EDIA UKO EBIGBEYI",
    },
  ];

  let currentIndex = 0;

  function updateTestimonial(index) {
    imageEl.classList.add("fade-out");
    textEl.classList.add("fade-out");
    authorEl.classList.add("fade-out");

    setTimeout(() => {
      imageEl.src = testimonials[index].image;
      textEl.textContent = testimonials[index].text;
      authorEl.textContent = testimonials[index].author;

      imageEl.classList.remove("fade-out");
      textEl.classList.remove("fade-out");
      authorEl.classList.remove("fade-out");

      imageEl.classList.add("fade-in");
      textEl.classList.add("fade-in");
      authorEl.classList.add("fade-in");
    }, 300);
  }

  // Init
  updateTestimonial(currentIndex);

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  });
});

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
   WHO WE ARE & EXPERIENCE HERO ROTATION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;

  const bgA = document.getElementById("heroBgA");
  const bgB = document.getElementById("heroBgB");

  if (!bgA || !bgB) return;

  const imageSets = {
    who: [
      "assets/images/who-hero-1.jpg",
      "assets/images/who-hero-2.jpg",
      "assets/images/who-hero-3.jpg",
      "assets/images/who-hero-4.jpg",
      "assets/images/who-hero-5.jpg",
    ],
    experience: [
      "assets/images/experience-hero-1.jpg",
      "assets/images/experience-hero-2.jpg",
      "assets/images/experience-hero-3.jpg",
      "assets/images/experience-hero-4.jpg",
      "assets/images/experience-hero-5.jpg",
      "assets/images/experience-hero-6.jpg",
    ],
  };

  const key = hero.dataset.hero;
  const images = imageSets[key];

  if (!images || images.length === 0) return;

  let index = 0;
  let active = bgA;
  let inactive = bgB;

  // preload
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  // initial
  active.style.backgroundImage = `url(${images[0]})`;
  active.classList.add("active", "zoom");

  setInterval(() => {
    index = (index + 1) % images.length;

    inactive.style.backgroundImage = `url(${images[index]})`;
    inactive.classList.add("active", "zoom");

    active.classList.remove("active", "zoom");

    [active, inactive] = [inactive, active];
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
    "assets/images/visual-6.jpg",
    "assets/images/visual-7.jpg",
    "assets/images/visual-8.jpg",
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

document.addEventListener("DOMContentLoaded", () => {
  // ============================
  // BOOK YOUR EXPERIENCE FORM
  // ============================
  const form = document.getElementById("experienceForm");

  if (form) {
    const steps = form.querySelectorAll(".form-step");
    const indicator = document.getElementById("stepIndicator");
    const nextBtn = document.getElementById("nextStep");
    const prevBtn = document.getElementById("prevStep");
    const submitBtn = document.getElementById("submitBtn");

    let currentStep = 0;

    function updateSteps() {
      steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
      });

      indicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;

      prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";
      nextBtn.style.display =
        currentStep === steps.length - 1 ? "none" : "inline-block";
      submitBtn.style.display =
        currentStep === steps.length - 1 ? "inline-block" : "none";
    }

    nextBtn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateSteps();
      }
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";

      // 🔗 Hook here for EmailJS / API / Supabase
      setTimeout(() => {
        form.reset();
        currentStep = 0;
        submitBtn.disabled = false;
        submitBtn.textContent = "SUBMIT EXPERIENCE REQUEST";
        updateSteps();
      }, 1200);
    });

    updateSteps();
  }

  // ============================
  // BOOK EXPERIENCE VISUAL SWIPE
  // ============================
  const visuals = document.querySelectorAll(".experience-visual .visual-bg");

  if (!visuals.length) return;

  let current = 0;

  visuals.forEach((bg, i) => {
    bg.classList.toggle("active", i === 0);
  });

  function rotateVisuals() {
    visuals[current].classList.remove("active");
    current = (current + 1) % visuals.length;
    visuals[current].classList.add("active");
  }

  setInterval(rotateVisuals, 6500);
});
