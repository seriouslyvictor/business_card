const all_links = document.querySelectorAll(".main__link")

all_links.forEach((link, idx) => {
    link.classList.add("slide-in-right")
    link.style.animationDelay = `${idx * 0.2}s`; // Delays each by 0.4s incrementally
});