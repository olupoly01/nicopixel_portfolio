document.addEventListener("DOMContentLoaded", () => {
  // Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
  }

  // Dynamic Typing Effect
  const words = ["Graphics", "Web"];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const dynamicTextElement = document.querySelector(".dynamic-text");

  function typeEffect() {
    if (!dynamicTextElement) return;
    const currentWord = words[currentWordIndex];
    const displayText = currentWord.slice(0, currentCharIndex);
    dynamicTextElement.textContent = displayText;

    if (!isDeleting && currentCharIndex < currentWord.length) {
      currentCharIndex++;
      setTimeout(typeEffect, 150);
    } else if (!isDeleting && currentCharIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  // Project Carousel
  const projects = document.querySelectorAll('.project');
  const gallery = document.querySelector('.gallery');
  let currentIndex = 0;

  function updateProjects() {
    projects.forEach((project, index) => {
      project.classList.toggle('active', index === currentIndex);
    });
    const offset = -currentIndex * 100;
    document.querySelector('.projects').style.transform = `translateX(${offset}%)`;
  }

  function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProjects();
  }

  function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProjects();
  }

  if (gallery) {
    gallery.addEventListener('touchstart', (event) => {
      x1 = event.touches[0].clientX;
    });

    gallery.addEventListener('touchmove', (event) => {
      if (!x1) return;
      const x2 = event.touches[0].clientX;
      const diff = x1 - x2;
      if (diff > 0) nextProject();
      else prevProject();
      x1 = null;
    });

    let autoSwitch = setInterval(nextProject, 4000);
  }

  const themeToggle = document.querySelector(".theme-toggle");
const logo = document.getElementById("logo"); // Favicon (link element)
const bodyLogos = document.querySelectorAll(".theme-logo"); // All other logo images
const moonIcon = themeToggle.querySelector(".fa-moon");
const sunIcon = themeToggle.querySelector(".fa-sun");

// Check if elements exist
if (!themeToggle || !logo || bodyLogos.length === 0) {
    console.error("Required elements not found!");
    return;
}

// Get saved theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme") || "dark";

// Apply the saved theme
document.documentElement.setAttribute("data-theme", savedTheme);

// Set the favicon and body logos
logo.href = savedTheme === "dark" ? "logo-light.svg" : "logo-dark.svg";
bodyLogos.forEach((img) => {
    img.src = savedTheme === "dark" ? "logo-light.svg" : "logo-dark.svg";
});

// Show the correct icon based on the theme
if (savedTheme === "dark") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
} else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
}

// Add event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Apply the new theme
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Update the favicon and body logos
    logo.href = newTheme === "dark" ? "logo-light.svg" : "logo-dark.svg";
    bodyLogos.forEach((img) => {
        img.src = newTheme === "dark" ? "logo-light.svg" : "logo-dark.svg";
    });

    // Show the correct icon
    if (newTheme === "dark") {
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
    } else {
        moonIcon.style.display = "inline-block";
        sunIcon.style.display = "none";
    }
});

});

