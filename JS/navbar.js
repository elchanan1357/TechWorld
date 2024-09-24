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
    location.reload();
  });
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
    initializeDropdowns();
  })
  .catch((error) => console.error('Error loading navbar:', error));
