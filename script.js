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
