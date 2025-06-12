document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(253, 250, 246, 0.95)"; // Sedikit lebih pekat saat scroll
    } else {
      header.style.backgroundColor = "rgba(253, 250, 246, 0.85)";
    }
  });
});
