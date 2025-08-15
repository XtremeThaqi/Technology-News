// Category filtering
const filterButtons = document.querySelectorAll("#all, #tech, #business");
const allArticles = document.querySelectorAll(".article");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
   filterButtons.forEach((btn) => {
  const isActive = btn === this;
  btn.classList.toggle("bg-blue-500", isActive);
  btn.classList.toggle("text-white", isActive);
  btn.classList.toggle("bg-gray-200", !isActive);
  btn.classList.toggle("text-gray-800", !isActive);
});

    // Filter articles
    const filter = this.id; // "all", "tech", "business"
    allArticles.forEach((article) => {
      const category = article.dataset.category;
      article.style.display =
        filter === "all" || category === filter ? "block" : "none";
    });
  });
});

// Form submission
document
  .getElementById("subscription-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
    this.reset();
  });
