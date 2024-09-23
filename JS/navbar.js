/**
 * Representing the user name
 */
function initializeNavbarLogin() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const loginElement = document.getElementById('login');
  const usernameElement = document.getElementById('username');

  if (userData && userData.firstName) {
    // User is logged in, hide the login button and show the username
    loginElement.style.display = 'none';
    usernameElement.style.display = 'block';
    usernameElement.querySelector('a').innerHTML = `Hello ${userData.firstName}`;
  } else {
    // User is not logged in, show the login button and hide the username
    loginElement.style.display = 'block';
    usernameElement.style.display = 'none';
  }
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