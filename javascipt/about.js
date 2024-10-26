const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Get the error message elements
  const errorMessageName = document.getElementById("errorMessageName");
  const errorMessageEmail = document.getElementById("errorMessageEmail");
  const errorMessageMessage = document.getElementById("errorMessageMessage");

  if (name === "") {
    errorMessageName.classList.remove("hidden");
  } else {
    errorMessageName.classList.add("hidden");
  }

  if (email === "") {
    errorMessageEmail.classList.remove("hidden");
  } else {
    errorMessageEmail.classList.add("hidden");
  }

  if (message === "") {
    errorMessageMessage.classList.remove("hidden");
  } else {
    errorMessageMessage.classList.add("hidden");
  }

  if (name === "" || email === "" || message === "") {
    return;
  } else {
    // Show Success Message
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");
  }

  // Hide Success Message
  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    successMessage.classList.add("hidden");
  });

  // Reset the form
  contactForm.reset();
});
