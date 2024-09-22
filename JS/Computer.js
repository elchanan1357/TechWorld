window.onload = function () {
  createTopLine();

  print(computers_arr, "Computer"); //create element in page

  document.getElementById("listColor").innerHTML = listOfColor();
  document.getElementById("listCompany").innerHTML = listOfCompany();

  for (let i = 0; i < 5; i++) createArrow("arrow_up", "arrow_down", i);
};

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input onchange="filterByCompany(computers_arr,'Apple','Computer',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input onchange="filterByCompany(computers_arr,'Samsung','Computer',1)" class="checkBox" type="checkbox" />
                      Samsung
                      <br />
                      <input onchange="filterByCompany(computers_arr,'Xiaomi','Computer',2)" class="checkBox" type="checkbox" />
                      Xiaomi`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input onchange="filterByColor(computers_arr,'Black','Computer',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input onchange="filterByColor(computers_arr,'White','Computer',4)" class="checkBox" type="checkbox" />
                      White
                      <br />
                      <input onchange="filterByColor(computers_arr,'Silver','Computer',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}
