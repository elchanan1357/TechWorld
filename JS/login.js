let complexArray = [];
function handleSubmit(event) {
  event.preventDefault(); //Prevents automatic submission of the form

  if (!checkInput()) return; //the input illegal
  else {
    //input legal
    firstName = document.getElementById("fn").value;
    lastName = document.getElementById("ln").value;
    email = document.getElementById("em").value;
    password = document.getElementById("pw").value;

    complexArray.push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    window.location.href = "index.html";
  }
  localStorage.setItem(
    "userData",
    JSON.stringify(complexArray[complexArray.length - 1])
  );
}

/**
 * checking input fom the user
 * @returns {boolean}
 */
function checkInput() {
  firstName = document.getElementById("fn").value;
  lastName = document.getElementById("ln").value;
  email = document.getElementById("em").value;
  password = document.getElementById("pw").value;
  verPas = document.getElementById("pw2").value;

  //if the first name legal
  if (!isValidString(firstName)) {
    alert("The first name not valid");
    return false;
  }

  //if the last name legal
  if (!isValidString(lastName)) {
    alert("The last name not valid");
    return false;
  }

  //if the first name legal
  if (!isValidEmail(email)) {
    alert("The email is not valid");
    return false;
  }

  //the password equal
  if (password != verPas) {
    alert("Please enter correct password");
    return false;
  }

  return true;
}

/**
 * checking if the name is correct
 * @param {string} name
 * @returns  {boolean}
 */
function isValidString(name) {
  return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(name); //just letters
}

/**
 * checking if the email is correct
 * @param {string} email
 * @returns  {boolean}
 */
function isValidEmail(email) {
  // return  /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
