// Mobile Menu
const openMenu = document.getElementById("openMenu");
openMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hidden"); // toggle the class hidden or not
});

// Buttons
const allBtn = document.getElementById("all");
const techBtn = document.getElementById("tech");
const businessBtn = document.getElementById("business");

// Sections
const techSection = document.querySelectorAll("#tech-section");
const businessSection = document.querySelectorAll("#business-section");

// Show All Section
allBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'block');
  businessSection.forEach(e => e.style.display = 'block');
});

// Show Tech Section
techBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'block');
  businessSection.forEach(e => e.style.display = 'none');
});

// Show Business Section
businessBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'none');
  businessSection.forEach(e => e.style.display = 'block');
});

// Subscribe Form Event
const modal = document.getElementById('modal');
const form = document.getElementById('subscription-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent from reloading
  modal.style.display = "flex"; // show modal
  form.reset(); // clear the form

  // when 3sec pass modal will wanish
  setTimeout(() => {
    modal.style.display = 'none';
  }, 3000);

});