//when window is on loading
window.onload = function () {
  createTopLine(); //create the top line

  print(tablets_arr, "Tablets"); //create element in page

  document.getElementById("listColor").innerHTML = listOfColor();
  document.getElementById("listCompany").innerHTML = listOfCompany();

  for (let i = 0; i < 5; i++) createArrow("arrow_up", "arrow_down", i);

  // saveFavoriteInOnload();
};

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input onchange="filterByCompany(tablets_arr,'Apple','Tablets',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input onchange="filterByCompany(tablets_arr,'Samsung','Tablets',1)" class="checkBox" type="checkbox" />
                      Samsung
                      <br />
                      <input onchange="filterByCompany(tablets_arr,'Lenovo','Tablets',2)" class="checkBox" type="checkbox" />
                      Lenovo`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input onchange="filterByColor(tablets_arr,'Black','Tablets',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input onchange="filterByColor(tablets_arr,'White','Tablets',4)" class="checkBox" type="checkbox" />
                      White
                      <br />
                      <input onchange="filterByColor(tablets_arr,'Silver','Tablets',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}
