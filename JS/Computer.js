window.onload = function () {
  createTopLine();

  print(computers_arr, 'Computer'); //create element in page

  //create list of sort
  document.getElementById('sortList').innerHTML = listOfSort();

  //create list of filtering
  document.getElementById('filterIn').innerHTML = `
  <button onclick="filter(computers_arr,'Computer')" class="mt-2">Filter</button>`;
  document.getElementById('listColor').innerHTML = listOfColor();
  document.getElementById('listCompany').innerHTML = listOfCompany();

  for (let i = 0; i < 5; i++) createArrow('arrow_up', 'arrow_down', i);
};

/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(computers_arr, 'Computer')">Price: Lowest To Highest</button>
          <button onclick="highToLow(computers_arr, 'Computer')">Price: Highest To Lowest</button>
          <button onclick="popular(computers_arr, 'Computer')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="AppleComputer" onchange="filterByCompany(computers_arr,'Apple','Computer',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input id="LenovoComputer" onchange="filterByCompany(computers_arr,'Lenovo','Computer',1)" class="checkBox" type="checkbox" />
                      Lenovo
                      <br />
                      <input id="DellComputer" onchange="filterByCompany(computers_arr,'Dell','Computer',2)" class="checkBox" type="checkbox" />
                      Dell
                      <br />
                      <input id="HPComputer" onchange="filterByCompany(computers_arr,'HP','Computer',2)" class="checkBox" type="checkbox" />
                      HP`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input id="blackColor" onchange="filterByColor(computers_arr,'Black','Computer',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input id="whiteColor" onchange="filterByColor(computers_arr,'White','Computer',4)" class="checkBox" type="checkbox" />
                      White
                      <br />
                      <input id="silverColor" onchange="filterByColor(computers_arr,'Silver','Computer',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}
