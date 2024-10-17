// Mobile Menu
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.remove("hidden");
});


// Buttons
const allBtn = document.getElementById("all");
const techBtn = document.getElementById("tech");
const businessBtn = document.getElementById("business");

// Sections
const techSection = document.querySelectorAll("#tech-section");
const businessSection = document.querySelectorAll("#business-section");

// Show Tech Section
allBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'block');
  businessSection.forEach(e => e.style.display = 'block');
});

// Show Business Section
businessBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'none');
  businessSection.forEach(e => e.style.display = 'block');
});

// Show All Section
techBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'block');
  businessSection.forEach(e => e.style.display = 'none');
});