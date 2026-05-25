// Header scroll state
(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 16) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// Scroll reveal
(function () {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => io.observe(el));
})();
