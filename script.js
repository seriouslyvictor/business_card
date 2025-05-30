const allLinks = document.querySelectorAll(".main__link")
const allBgs = ["background.webp", "Galaxy.jpg", "Planet.jpg"]
const contactContainer = document.querySelector('.contact__container');
const contactBtn = document.querySelector('.contact__btn');
const contactForm = document.querySelector('.contact__form');

const randomBg = function (array) {
    let cardEl = document.querySelector(".card");

    if (cardEl && array.length > 0) {
        cardEl.style.setProperty("background-image", `url("backgrounds/${array[rng]}")`);
    }
};

allLinks.forEach((link, idx) => {
    link.classList.add("slide-in-right")
    link.style.animationDelay = `${idx * 0.2}s`;
});

contactContainer.classList.add("slide-in-right");
contactContainer.style.animationDelay = `${allLinks.length * 0.2}s`;

contactBtn.addEventListener('click', (e) => {
    contactContainer.classList.toggle('active');
});

// document.addEventListener('click', (e) => {
//     if (!contactContainer.contains(e.target)) {
//         contactContainer.classList.remove('active');
//     }
// });

const contactFormElement = document.getElementById('contactForm');
contactFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    contactContainer.classList.remove('active');
    contactFormElement.reset();

    // Fade out current text
    contactBtn.classList.add('fade');

    // Wait for fade out, then change text and fade in
    setTimeout(() => {
        contactBtn.textContent = "Tudo certo! 🎉";
        contactBtn.classList.remove('fade');

        // After 3 seconds, fade out success message
        setTimeout(() => {
            contactBtn.classList.add('fade');

            // Wait for fade out, then change back to original text and fade in
            setTimeout(() => {
                contactBtn.textContent = "Vamos Conversar?";
                contactBtn.classList.remove('fade');
            }, 300);
        }, 3000);
    }, 300);
});

randomBg(allBgs)
