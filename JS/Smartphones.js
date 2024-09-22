//when window is on loading
window.onload = function () {
  createTopLine(); //create the top line
  print(smartphones_arr, "Smartphone"); //create element in page

  document.getElementById("listColor").innerHTML = listOfColor();
  document.getElementById("listCompany").innerHTML = listOfCompany();

  for (let i = 0; i < 5; i++) createArrow("arrow_up", "arrow_down", i);

  saveFavoriteInOnload();
};

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input onchange="filterByCompany(smartphones_arr,'Apple','Smartphone',0)" class="checkBox" type="checkbox" />
                    Apple
                    <br />
                    <input onchange="filterByCompany(smartphones_arr,'Samsung','Smartphone',1)" class="checkBox" type="checkbox" />
                    Samsung
                    <br />
                    <input onchange="filterByCompany(smartphones_arr,'Xiaomi','Smartphone',2)" class="checkBox" type="checkbox" />
                    Xiaomi`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                  <input onchange="filterByColor(smartphones_arr,'Black','Smartphone',3)"  class="checkBox" type="checkbox" />
                    Black
                    <br />
                    <input onchange="filterByColor(smartphones_arr,'White','Smartphone',4)" class="checkBox" type="checkbox" />
                    White
                    <br />
                    <input onchange="filterByColor(smartphones_arr,'Silver','Smartphone',5)" class="checkBox" type="checkbox" />
                    Silver
  `;
}

function addBanaras(_id) {
  let banner = document.createElement("div");
  document.getElementById(_id).innerHTML += `
        <a href="https://www.apple.com/iphone-16-pro/">
           <img src="../Images/Banars/pro_16.jpg" alt="" class="col-lg-12 p-0" />
        </a>
`;
}
