document.addEventListener("DOMContentLoaded", function () {
  const ctaButtons = document.querySelectorAll(".cta-button");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 100);
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      } else {
        entry.target.style.opacity = "0";
        entry.target.style.transform = "translateY(30px)";
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);

    card.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#fff";
    });
    card.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "";
    });
  });

  const chatBubbles = document.querySelectorAll(".chat-bubble");
  chatBubbles.forEach((bubble, index) => {
    bubble.style.animationDelay = `${index * 0.3}s`;
  });

  const stats = document.querySelectorAll(".stat-number");
  const observerStats = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent;

        target.style.animation = "pulse 0.5s ease";
      }
    });
  }, observerOptions);

  stats.forEach((stat) => observer.observe(stat));

  const style = document.createElement("style");
  style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
  document.head.appendChild(style);

  let lastScroll = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
  });

  navbar.style.transition = "transform 0.3s ease";

  console.log("%c💙 S.A.N.A - Safe AI for Need & Affection", "color: #4A90E2; font-size: 20px; font-weight: bold;");
  console.log("%cLanding page design ready! This is a design preview.", "color: #5D6D7E; font-size: 14px;");
});
