const navList = document.getElementById("nav-list");
const navBtn = document.getElementById("nav-btn");
const nav = document.querySelector("nav");


navBtn.addEventListener("click", () => {
  const isVisible = navList.getAttribute("data-visible");
  if (isVisible === "false") {
	navList.setAttribute("data-visible", "true");
	navBtn.setAttribute("aria-expanded", "true");
	nav.setAttribute("data-backdrop", "true");
  } else {
	navList.setAttribute("data-visible", "false");
	navBtn.setAttribute("aria-expanded", "false");
	nav.setAttribute("data-backdrop", "false");
  }
});