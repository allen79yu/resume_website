import "../css/reset.css";
import "../css/style.scss";

/**
 * Restrained entrance: sections fade up into place once, the first time
 * they cross into view. No parallax tracking, no scroll math.
 */
function initReveal() {
    const targets = document.querySelectorAll(
        ".title, .path-block, .abouts, .skill-item, .portfolio-grid > [class*='col-'], .contact h4"
    );

    if (!("IntersectionObserver" in window)) {
        targets.forEach((el) => el.classList.add("in-view"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
}

/** Staggers siblings within a group by setting a transition-delay step. */
function initStagger() {
    const groups = document.querySelectorAll(".skills, .portfolio-grid-section");
    groups.forEach((group) => {
        const items = group.querySelectorAll(".skill-item, [class*='col-']");
        items.forEach((item, i) => {
            item.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
        });
    });
}

/** Keeps the footer copyright on the current year. */
function initCopyrightYear() {
    const year = document.getElementById("copyright-year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initCopyrightYear();
    initStagger();
    initReveal();
});
