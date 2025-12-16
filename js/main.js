const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

// Glass blur + header shrink on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const welcomeArrow = document.getElementById("welcomeArrow");

if (welcomeArrow) {
  welcomeArrow.addEventListener("click", () => {
    // Prevent repeat confetti in same session
    if (sessionStorage.getItem("welcomeConfettiPlayed")) return;

    sessionStorage.setItem("welcomeConfettiPlayed", "true");

    // Elegant, subtle confetti
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

const testimonials = [
  {
    image: "assets/images/client.jpg",
    text: `Working with Gozie on the KAI Collective Houston Sample Sale was an absolute masterclass in proactive, creative and thoughtful execution. She anticipated needs before they arose, communicated with clarity and confidence, and ran every detail with calm precision. Her level of organization, creativity and initiative has genuinely raised the bar for how we approach events going forward, and our standards have been upped forever as a result. We cannot wait to work with Coker Creative again!!`,
    author: "FISAYO LONGE",
  },
  {
    image: "assets/images/maggi.jpg",
    text: `I knew I wanted Gozie and Coker Creative to plan our wedding even before we officially started planning, and she exceeded every expectation. Working with Gozie immediately put me at ease and gave me complete confidence that she was always advocating for us. She is a true creative genius, yet remains calm, composed and solutions-oriented no matter what. 

One of the most important things when choosing a planner is finding someone you can be completely free and comfortable with; someone you can be honest with about your vision, your preferences, and even what you don’t like. Gozie was exactly that for me and I felt heard and supported. She went above and beyond at every stage recommending great vendors and ensuring our guests were well taken care of. Throughout the planning process, her communication was clear and thoughtful with detailed spreadsheets and well-organized timelines that made everything feel seamless. 

I recommend Gozie and Coker Creative to everyone I know who is getting married or planning an event. The CC touch is truly second to none! Choosing her was the best decision we made for our destination wedding and I would absolutely choose her again. .`,
    author: "EDIA UKO EBIGBEYI ",
  },
];

let currentIndex = 0;

const imageEl = document.getElementById("testimonialImage");
const textEl = document.getElementById("testimonialText");
const authorEl = document.getElementById("testimonialAuthor");

const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

function updateTestimonial(index) {
  // Fade out
  imageEl.classList.add("testimonial-fade-out");
  textEl.classList.add("testimonial-fade-out");
  authorEl.classList.add("testimonial-fade-out");

  setTimeout(() => {
    imageEl.src = testimonials[index].image;
    textEl.textContent = testimonials[index].text;
    authorEl.textContent = testimonials[index].author;

    // Fade in
    imageEl.classList.remove("testimonial-fade-out");
    textEl.classList.remove("testimonial-fade-out");
    authorEl.classList.remove("testimonial-fade-out");

    imageEl.classList.add("testimonial-fade-in");
    textEl.classList.add("testimonial-fade-in");
    authorEl.classList.add("testimonial-fade-in");
  }, 300);
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

// Footer entrance animation
const footer = document.querySelector(".footer");

if (footer) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-visible");
        footerObserver.unobserve(footer); // run once
      }
    },
    { threshold: 0.2 }
  );

  footerObserver.observe(footer);
}

const goTopBtn = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
