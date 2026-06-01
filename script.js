// =========================
// Navbar Scroll Effect
// =========================

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// =========================
// Reveal Sections on Scroll
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// =========================
// Button Ripple Effect
// =========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple =
            document.createElement("span");

        const diameter =
            Math.max(
                this.clientWidth,
                this.clientHeight
            );

        const radius = diameter / 2;

        ripple.style.width =
            ripple.style.height =
            `${diameter}px`;

        ripple.style.left =
            `${e.clientX -
            this.offsetLeft -
            radius}px`;

        ripple.style.top =
            `${e.clientY -
            this.offsetTop -
            radius}px`;

        ripple.classList.add("ripple");

        const oldRipple =
            this.querySelector(".ripple");

        if (oldRipple) {
            oldRipple.remove();
        }

        this.appendChild(ripple);

    });

});

// =========================
// Animated Counter
// =========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if (current < target) {

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// Hero Fade-In Animation
// =========================

window.addEventListener("load", () => {

    const hero =
    document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {

        hero.style.transition =
        "all 1s ease";

        hero.style.opacity = "1";
        hero.style.transform =
        "translateY(0)";

    }, 300);

});

// =========================
// Card Tilt Effect
// =========================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateX =
        (y - rect.height / 2) / 15;

        const rotateY =
        -(x - rect.width / 2) / 15;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});