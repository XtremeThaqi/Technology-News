// Mobile menu toggle
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("open");
  });

// Form validation and submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset error messages
  document.querySelectorAll('[id^="errorMessage"]').forEach((el) => {
    el.classList.add("hidden");
  });

  // Validate form
  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    document.getElementById("errorMessageName").classList.remove("hidden");
    isValid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("errorMessageEmail").classList.remove("hidden");
    isValid = false;
  }

  if (!message) {
    document.getElementById("errorMessageMessage").classList.remove("hidden");
    isValid = false;
  }

  if (isValid) {
    // In a real implementation, you would submit the form here
    // For demo purposes, we'll just show the success message
    document.getElementById("successMessage").classList.remove("hidden");
    this.reset();
  }
});

// Close modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("successMessage").classList.add("hidden");
});
