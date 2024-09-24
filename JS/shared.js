/**
 * Shared functions
 */

// Load Bootstrap JS dynamically
const bootstrapScript = document.createElement('script');
bootstrapScript.src =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
bootstrapScript.integrity =
  'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
bootstrapScript.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapScript);

/**
 *  Initialize bootstrap's dropdown
 * At the moment, needed for the navbar dropdown (or any other case)
 */
function initializeDropdowns() {
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function (dropdown) {
    new bootstrap.Dropdown(dropdown);
  });
}

// Initialize dropdowns when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  initializeDropdowns();
});
