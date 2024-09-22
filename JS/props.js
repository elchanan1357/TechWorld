//when window is on loading
window.onload = function () {
  createTopLine(); //create the top line
  print(props_arr, "Props"); //create element in page

  //create list of sort
  document.getElementById("sortList").innerHTML = listOfSort();

  //create list of filtering
  document.getElementById("filterIn").innerHTML = `
  <button onclick="filter(props_arr,'Props')" class="mt-2">Filter</button>`;
  document.getElementById("listColor").innerHTML = listOfColor();
  document.getElementById("listCompany").innerHTML = listOfCompany();

  for (let i = 0; i < 5; i++) createArrow("arrow_up", "arrow_down", i);
};

/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(props_arr, 'Props')">Price: Lowest To Highest</button>
          <button onclick="highToLow(props_arr, 'Props')">Price: Highest To Lowest</button>
          <button onclick="popular(props_arr, 'Props')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input onchange="filterByCompany(props_arr,'Apple','Props',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input onchange="filterByCompany(props_arr,'Bose','Props',1)" class="checkBox" type="checkbox" />
                      Bose
                      <br />
                      <input onchange="filterByCompany(props_arr,'Sony','Props',2)" class="checkBox" type="checkbox" />
                      Sony
                      <br />
                      <input onchange="filterByCompany(props_arr,'Logitech','Props',2)" class="checkBox" type="checkbox" />
                      Logitech`;
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
