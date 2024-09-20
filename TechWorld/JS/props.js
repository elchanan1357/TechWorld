//when window is on loading
window.onload = function () {
  createTopLine(); //create the top line
  print(props_arr, "Props"); //create element in page

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
  return `    <input onchange="filterByCompany(props_arr,'Apple','Props',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input onchange="filterByCompany(props_arr,'Samsung','Props',1)" class="checkBox" type="checkbox" />
                      Samsung
                      <br />
                      <input onchange="filterByCompany(props_arr,'Xiaomi','Props',2)" class="checkBox" type="checkbox" />
                      Xiaomi`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input onchange="filterByColor(props_arr,'Black','Props',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input onchange="filterByColor(props_arr,'White','Props',4)" class="checkBox" type="checkbox" />
                      White
                      <br />
                      <input onchange="filterByColor(props_arr,'Silver','Props',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}
