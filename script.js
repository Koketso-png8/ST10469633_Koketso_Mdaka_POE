const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  const closeMenu = () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation menu"
    );
  };

  menuToggle.addEventListener("click", () => {

    const open = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuToggle.setAttribute(
      "aria-label",
      open
        ? "Close navigation menu"
        : "Open navigation menu"
    );

  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

}
const currentPage =
  location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach(link => {

  if (link.getAttribute("href") === currentPage) {

    link.classList.add("active");

    link.setAttribute(
      "aria-current",
      "page"
    );

  }

});

const revealItems = document.querySelectorAll(
  ".product-card, .card, .changelog-card"
);

const reduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (
  reduced ||
  !("IntersectionObserver" in window)
) {

  revealItems.forEach(element => {
    element.classList.add("visible");
  });

} else {

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

  });

}

const dateInput = document.getElementById("date");

if (dateInput) {

  const now = new Date();

  dateInput.min = new Date(
    now.getTime() -
    now.getTimezoneOffset() * 60000
  ).toISOString().slice(0, 10);

}

document.querySelectorAll("form").forEach(form => {

  form.addEventListener("submit", event => {

    if (!form.checkValidity()) {

      event.preventDefault();

      form.reportValidity();

    }

  });

});
