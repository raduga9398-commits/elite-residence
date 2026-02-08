const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

if (burger && mobileNav) {
  burger.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block";
    mobileNav.style.display = isOpen ? "none" : "block";
    burger.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close on resize up
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      mobileNav.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    }
  });
}
