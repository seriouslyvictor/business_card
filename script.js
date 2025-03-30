const allLinks = document.querySelectorAll(".main__link")
const allBgs = ["background.webp", "Galaxy.jpg", "Planet.jpg"]

const randomBg = function (array) {
    let cardEl = document.querySelector(".card");

    if (cardEl && array.length > 0) { // Check if element exists and array is not empty
        let rng = Math.floor(Math.random() * array.length); // Use dynamic length
        cardEl.style.setProperty("background-image", `url("/backgrounds/${array[rng]}")`); // Fix CSS format
    }
};
allLinks.forEach((link, idx) => {
    link.classList.add("slide-in-right")
    link.style.animationDelay = `${idx * 0.2}s`; // Delays each by 0.4s incrementally
});

randomBg(allBgs)