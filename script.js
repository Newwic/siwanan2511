function openImg(src) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupImg").src = src;
}

function closeImg() {
    document.getElementById("popup").style.display = "none";
}

/* Scroll Animation */
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        let pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
