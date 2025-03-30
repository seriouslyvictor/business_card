const all_links = document.querySelectorAll(".main__link")


const adjustHeight = function () {
    let vh = window.innerHeight;
    console.log(vh)
    let cardEl = document.querySelector(".card")
    cardEl.setAttribute("height", vh + "px")

}

all_links.forEach((link, idx) => {
    link.classList.add("slide-in-right")
    link.style.animationDelay = `${idx * 0.2}s`; // Delays each by 0.4s incrementally
});

document.addEventListener("DOMContentLoaded", adjustHeight)