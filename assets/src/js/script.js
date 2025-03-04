document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    let newTheme =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    themeToggle.innerHTML =
      theme === "dark"
        ? '<i class="bi bi-brightness-high-fill"></i>'
        : '<i class="bi bi-moon-fill"></i>';
  }
});
