// =========================================================
// Marigold Shop, marigold.js
// Four small blocks copied from the Bootstrap docs.
// You do not need to understand them yet. Course 3 explains every line.
// =========================================================


// ---------- Block 1: switch on tooltips and popovers (lesson 33) ----------
// Course 3 explains this block.
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
  new bootstrap.Tooltip(el);
});
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
  new bootstrap.Popover(el);
});


// ---------- Block 2: show the "Added to your cart" toast (lesson 34) ----------
// Course 3 explains this block.
var cartToast = document.getElementById('cartToast');
if (cartToast) {
  document.querySelectorAll('.js-add-to-cart').forEach(function (button) {
    button.addEventListener('click', function () {
      bootstrap.Toast.getOrCreateInstance(cartToast).show();
    });
  });
}


// ---------- Block 3: check forms before they are sent (lesson 42) ----------
// Course 3 explains this block.
document.querySelectorAll('.needs-validation').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
});


// ---------- Block 4: light and dark mode button (lesson 43) ----------
// Course 3 explains this block.
var themeToggle = document.getElementById('themeToggle');
var savedTheme = localStorage.getItem('marigold-theme') || 'light';

function setTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('marigold-theme', theme);
  if (themeToggle) {
    themeToggle.innerHTML = theme === 'dark'
      ? '<i class="bi bi-sun" aria-hidden="true"></i><span class="visually-hidden">Switch to light mode</span>'
      : '<i class="bi bi-moon-stars" aria-hidden="true"></i><span class="visually-hidden">Switch to dark mode</span>';
  }
}

setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    var now = document.documentElement.getAttribute('data-bs-theme');
    setTheme(now === 'dark' ? 'light' : 'dark');
  });
}
