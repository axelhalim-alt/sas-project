/* ===============================
   ELEMENT SELECTION
================================ */
const loader = document.getElementById("loader");
const root = document.getElementById("onboardRoot");
const slider = document.getElementById("slider");
const dots = [...document.querySelectorAll(".dot")];
const slides = [...document.querySelectorAll(".slide")];
const viewport = document.getElementById("viewport");

const btnStart = document.getElementById("btnStart");
const soundToggle = document.getElementById("soundToggle");
const themeToggle = document.getElementById("themeToggle");

const parallaxElements = [...document.querySelectorAll("[data-parallax]")];
const chime = document.getElementById("chime");
document.addEventListener("DOMContentLoaded", () => {
    const chime = document.getElementById("chime");

/* ===============================
   STATE
================================ */
let index = 0;
let autoplay = null;
let soundEnabled = true;

/* ===============================
   LOADER
================================ */
function hideLoader() {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
        root.style.opacity = "1";
        root.removeAttribute("aria-hidden");
    }, 450);
}

setTimeout(hideLoader, 700);

/* ===============================
   SLIDER
================================ */
function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

function goTo(i) {
    index = (i + slides.length) % slides.length;
    updateSlider();

    if (soundEnabled) {
        chime.currentTime = 0;
        chime.play().catch(() => {});
    }
}

function startAutoplay() {
    autoplay = setInterval(() => goTo(index + 1), 4200);
}

function stopAutoplay() {
    clearInterval(autoplay);
}

/* ===============================
   DOT CLICK
================================ */
dots.forEach(d =>
    d.addEventListener("click", () => {
        stopAutoplay();
        goTo(Number(d.dataset.index));
        startAutoplay();
    })
);

/* ===============================
   SWIPE (MOBILE)
================================ */
let startX = 0;

viewport.addEventListener("touchstart", e => {
    stopAutoplay();
    startX = e.touches[0].clientX;
}, { passive: true });

viewport.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) goTo(index + (dx < 0 ? 1 : -1));
    startAutoplay();
});

/* ===============================
   PARALLAX
================================ */
viewport.addEventListener("mousemove", e => {
    const rect = viewport.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    parallaxElements.forEach(el => {
        const bg = el.querySelector(".img-bg");
        const fg = el.querySelector(".img-fg");

        bg.style.transform = `translate(${x * 8}px, ${y * 6}px) scale(1.06)`;
        fg.style.transform = `translate(${x * 20}px, ${y * 14}px)`;
    });
});

viewport.addEventListener("mouseleave", () => {
    parallaxElements.forEach(el => {
        el.querySelector(".img-bg").style.transform = "";
        el.querySelector(".img-fg").style.transform = "";
    });
});

/* ===============================
   SOUND TOGGLE
================================ */
soundToggle.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? "🔊" : "🔈";
});

/* ===============================
   DARK MODE TOGGLE
================================ */
themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    if (isDark) {
        document.documentElement.dataset.theme = "light";
    } else {
        document.documentElement.dataset.theme = "dark";
    }
});

/* ===============================
   GET STARTED BUTTON
================================ */
btnStart.addEventListener("click", () => {
    if (soundEnabled) {
        chime.currentTime = 0;
        chime.play();
    }
    setTimeout(() => (location.href = "pages.html"), 300);
});

chime.addEventListener("canplaythrough", () => {
    chime.play();
});

chime.currentTime = 0;
chime.play();

function playFullAudio() {
    chime.pause();  
    chime.currentTime = 0;  
    chime.play();  
}

playFullAudio();

});

/* AUTO START AUTOPLAY */
startAutoplay();
