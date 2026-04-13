const yearSpans = document.querySelectorAll('[data-year]');
yearSpans.forEach((el) => {
  el.textContent = new Date().getFullYear();
});
