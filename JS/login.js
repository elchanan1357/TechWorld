let complexArray = [];
function submit() {
  firstName = document.getElementById('fn').value;
  lastName = document.getElementById('ln').value;
  email = document.getElementById('em').value;
  password = document.getElementById('pw').value;
  verPas = document.getElementById('pw2').value;

  if (password != verPas) alert('Please enter correct password');
  else {
    complexArray.push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    window.location.href = 'index.html';
  }
  localStorage.setItem('userData', JSON.stringify(complexArray[complexArray.length - 1]));
}
