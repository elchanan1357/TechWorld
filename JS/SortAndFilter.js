/**
 * casting number from string to float number
 * @param {number} price
 * @returns {number} float number
 */
function parsePrice(price) {
  return parseFloat(price.replace(/[₪,]/g, "")); //remove tags
}

let sort_arr = []; //for all type of sort
/**
 * sort element by price low to high
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function lowToHigh(json_arr, id) {
  //if arr was not filtered
  if (sort_arr.length === 0) sort_arr = JSON.parse(JSON.stringify(json_arr)); //create copy

  sort_arr.sort(
    //sort element
    (item1, item2) => parsePrice(item1.price) - parsePrice(item2.price)
  );

  print(sort_arr, id); //display element
}

/**
 * sort element by price high to low
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function highToLow(json_arr, id) {
  //if arr was not filtered
  if (sort_arr.length === 0) sort_arr = JSON.parse(JSON.stringify(json_arr)); //create copy

  sort_arr.sort(
    //sort element
    (item1, item2) => parsePrice(item2.price) - parsePrice(item1.price)
  );

  print(sort_arr, id); //display element
}

/**
 * sort element by popularity
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function popular(json_arr, id) {
  //if arr was not filtered
  if (sort_arr.length === 0) sort_arr = JSON.parse(JSON.stringify(json_arr)); //create copy

  sort_arr.sort(() => 0.5 - Math.random());

  print(sort_arr, id); //display element
}

/**
 * filter element from price between (from , to)
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function filter(json_arr, id) {
  let from = document.getElementById("fromPrice").value;
  let to = document.getElementById("toPrice").value;

  //just element between (from , to)
  let temp_arr = json_arr.filter((item) => {
    return parsePrice(item.price) >= from && parsePrice(item.price) <= to;
  });

  print(temp_arr, id); //display element
  sort_arr = temp_arr;
}

/**
 * filter the element by color
 * @param {object} json_arr data
 * @param {string} company the company chose
 * @param {number} id id of page for display
 * @param {number} i position in the class
 */
function filterByCompany(json_arr, company, id, i) {
  let temp_arr = JSON.parse(JSON.stringify(json_arr)); //create copy

  checkbox = document.getElementsByClassName("checkBox")[i]; //get element

  if (checkbox.checked)
    temp_arr = json_arr.filter((item) => item.company === company);

  print(temp_arr, id); //display in the page
  sort_arr = temp_arr;
}

/**
 * filter the element by color
 * @param {object} json_arr data
 * @param {string} color the color chose
 * @param {number} id id of page for display
 * @param {number} i position in the class
 */
function filterByColor(json_arr, color, id, i) {
  let temp_arr = JSON.parse(JSON.stringify(json_arr)); //create copy

  checkbox = document.getElementsByClassName("checkBox")[i]; //get element
  if (checkbox.checked)
    temp_arr = json_arr.filter((item) => item.color === color);

  print(temp_arr, id); //display in the page
  sort_arr = temp_arr;
}
