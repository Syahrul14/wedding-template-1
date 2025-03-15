document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // Muncul
      } else {
        entry.target.classList.remove('show'); // Hilang (kalau mau balik pas scroll up)
      }
    });
  });

  document.querySelectorAll('.fade, .fade-left').forEach((el) => observer.observe(el));
});