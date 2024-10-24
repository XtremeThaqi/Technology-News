// Mobile Menu for all pages
const openMenu = document.getElementById("openMenu");
openMenu.addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("hidden"); // toggle the class hidden or not
});

// //
// // 

// Buttons
const allBtn = document.getElementById("all");
const techBtn = document.getElementById("tech");
const businessBtn = document.getElementById("business");

// Sections
const techSection = document.querySelectorAll("#tech-section");
const businessSection = document.querySelectorAll("#business-section");

// Show All Sections
allBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'block');
  businessSection.forEach(e => e.style.display = 'block');
});

// Show Tech Sections
techBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'block');
  businessSection.forEach(e => e.style.display = 'none');
});

// Show Business Sections
businessBtn.addEventListener('click', () => {
  techSection.forEach(e => e.style.display = 'none');
  businessSection.forEach(e => e.style.display = 'block');
});
// End

// Subscribe Form Event
const homeModal = document.getElementById('modal');
const form = document.getElementById('subscription-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent from reloading
  homeModal.style.display = "flex"; // show modal
  form.reset(); // clear the form
});

// Close the Modal
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
  homeModal.style.display = 'none'
})