/**
 * casting from string to the float number
 * @param {string} price
 * @returns {number} float number
 */
function parsePrice(price) {
  return parseFloat(price.replace(/[₪,]/g, "")); //remove tags
}

/**
 * sort element by price low to high
 * @param {object} json_arr
 * @param {string} id id of page
 */
function lowToHigh(json_arr, id) {
  let temp_smartphones = JSON.parse(JSON.stringify(json_arr)); //create copy

  temp_smartphones.sort(
    //sort element
    (item1, item2) => parsePrice(item1.price) - parsePrice(item2.price)
  );

  document.getElementById(id).innerHTML = ""; //clean the old element
  temp_smartphones.forEach((val) => addToBox(val, id)); //add to html
}

/**
 * sort element by price high to low
 * @param {object} json_arr
 * @param {string} id id of page
 */
function highToLow(json_arr, id) {
  let temp_smartphones = JSON.parse(JSON.stringify(json_arr)); //create copy

  temp_smartphones.sort(
    //sort element
    (item1, item2) => parsePrice(item2.price) - parsePrice(item1.price)
  );

  document.getElementById(id).innerHTML = ""; //clean the old element
  temp_smartphones.forEach((val) => addToBox(val, id)); //add to html
}

/**
 *sort element by popularity
 * @param {object} json_arr
 * @param {string} id id of page
 */
function popular(json_arr, id) {
  document.getElementById(id).innerHTML = ""; //clean the old element
  json_arr.forEach((val) => addToBox(val, id)); //add to html
}

/**
 * filter element just element that price
 * between the (from , to)
 * @param {object} json_arr
 * @param {string} id id of page
 */
function filter(json_arr, id) {
  let from = parsePrice(document.getElementById("fromPrice").val);
  let to = parsePrice(document.getElementById("toPrice").val);

  let temp_smartphones = JSON.parse(JSON.stringify(json_arr)); //create copy

  //just element between (from , to)
  temp_smartphones.filter((val) => {
    console.log();
    parsePrice(val.price) >= from && parsePrice(val.price) <= to;
  });

  document.getElementById(id).innerHTML = ""; //clean the old element
  temp_smartphones.forEach((val) => addToBox(val, id));
}

function filterByCompany() {}

function filterByColor() {}

function changeView() {}
