document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("open");
    });
});


    const words = ["Graphics", "Web"];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const dynamicTextElement = document.querySelector(".dynamic-text");

    function typeEffect() {
        const currentWord = words[currentWordIndex];
        const displayText = currentWord.slice(0, currentCharIndex);

        dynamicTextElement.textContent = displayText;

        if (!isDeleting && currentCharIndex < currentWord.length) {
            // Continue typing
            currentCharIndex++;
            setTimeout(typeEffect, 150); // Typing speed
        } else if (!isDeleting && currentCharIndex === currentWord.length) {
            // Pause before deleting
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause when word is complete
        } else if (isDeleting && currentCharIndex > 0) {
            // Continue deleting
            currentCharIndex--;
            setTimeout(typeEffect, 100); // Deleting speed
        } else if (isDeleting && currentCharIndex === 0) {
            // Move to the next word
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); // Pause before typing the next word
        }
    }

    document.addEventListener("DOMContentLoaded", () => typeEffect());


    const projects = document.querySelectorAll('.project');
    let currentIndex = 0;
    
    function updateProjects() {
      projects.forEach((project, index) => {
        project.classList.remove('active');
        if (index === currentIndex) {
          project.classList.add('active');
        }
      });
    
      const offset = -currentIndex * 100; // Adjust slider position
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
    
    // Auto-switch every 5 seconds
    let autoSwitch = setInterval(nextProject, 4000);
    
    // Allow swiping with buttons or swipe gestures
    document.querySelector('.gallery').addEventListener('touchstart', handleTouchStart);
    document.querySelector('.gallery').addEventListener('touchmove', handleTouchMove);
    
    let x1 = null;
    function handleTouchStart(event) {
      x1 = event.touches[0].clientX;
    }
    
    function handleTouchMove(event) {
      if (!x1) return;
    
      let x2 = event.touches[0].clientX;
      let diff = x1 - x2;
    
      if (diff > 0) nextProject();
      else prevProject();
    
      x1 = null;
    }
    
    // Add navigation buttons (optional)
    // document.querySelector('.gallery').insertAdjacentHTML('beforeend', `
    //   <button class="prev">‹</button>
    //   <button class="next">›</button>
    // `);
    
    // document.querySelector('.prev').addEventListener('click', prevProject);
    // document.querySelector('.next').addEventListener('click', nextProject);
    
    // Pause auto-switch on manual action
    // document.querySelector('.gallery').addEventListener('mouseover', () => clearInterval(autoSwitch));
    // document.querySelector('.gallery').addEventListener('mouseleave', () => {
    //   autoSwitch = setInterval(nextProject, 5000);
    // });
    
