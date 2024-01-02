const navList = document.getElementById("nav-list");
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", () => {
  const isVisible = navList.getAttribute("data-visible");
  if (isVisible === "false") {
    navList.setAttribute("data-visible", "true");
    navBtn.setAttribute("aria-expanded", "true");
  } else {
    navList.setAttribute("data-visible", "false");
    navBtn.setAttribute("aria-expanded", "false");
  }
});