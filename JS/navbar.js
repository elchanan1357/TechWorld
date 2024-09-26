/**
 * Representing the user name
 */
function initializeNavbarLogin() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const loginElement = document.getElementById('login');
  const usernameElement = document.getElementById('username');
  const logoutElement = document.getElementById('logout');
  const stockOption = document.getElementById('stock-option');

  if (userData && userData.firstName) {
    loginElement.style.display = 'none';
    usernameElement.style.display = 'block';
    usernameElement.querySelector('#userNameDisplay').innerHTML =
      `${userData.firstName}`;
    logoutElement.style.display = 'block';

    if (userData.firstName.toLowerCase() === 'admin') {
      stockOption.style.display = 'block';
    }
  } else {
    loginElement.style.display = 'block';
    usernameElement.style.display = 'none';
    logoutElement.style.display = 'none';
  }

  logoutElement.addEventListener('click', function () {
    localStorage.removeItem('userData');
    localStorage.removeItem('currentCart');
    localStorage.removeItem('favorites_arr');
    location.reload();
  });
}

// Function to initialize dropdowns only when Bootstrap is fully loaded
function ensureBootstrapAndInitializeDropdowns() {
  if (!window.bootstrap) {
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.integrity =
      'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bootstrapScript.crossOrigin = 'anonymous';
    bootstrapScript.onload = initializeDropdowns; // Ensure dropdowns initialize after the script is loaded
    document.head.appendChild(bootstrapScript);
  } else {
    initializeDropdowns(); // Bootstrap is already loaded
  }
}

/**
 * Creating a parent element on the DOM to hold the navbar if element not found
 * then fetching the navbar and initialize login and dropdown logic
 */
const loadNavbar = () => {
  let navbarPlaceholder = document.getElementById('navbar-placeholder');

  if (!navbarPlaceholder) {
    navbarPlaceholder = document.createElement('div');
    navbarPlaceholder.id = 'navbar-placeholder';
    document.body.insertBefore(navbarPlaceholder, document.body.firstChild);
  }

  // Fetch and load the navbar
  fetch('navbar.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('navbar-placeholder').innerHTML = data;
      // Initialize navbar login functionality
      initializeNavbarLogin();

      // Initialize dropdowns inside the newly fetched navbar
      // This is necessary even with the event listener inside the shared file, because the navbar was loaded asynchronously
      ensureBootstrapAndInitializeDropdowns();
    })
    .catch((error) => console.error('Error loading navbar:', error));
};

loadNavbar();
