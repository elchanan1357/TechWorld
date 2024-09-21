/**
 * casting number from string to float number
 * @param {number} price
 * @returns {number} float number
 */
function parsePrice(price) {
  return parseFloat(price.replace(/[₪,]/g, "")); //remove tags
}

/**
 * sort element by price low to high
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function lowToHigh(json_arr, id) {
  let temp_smartphones = JSON.parse(JSON.stringify(json_arr)); //create copy

  temp_smartphones.sort(
    //sort element
    (item1, item2) => parsePrice(item1.price) - parsePrice(item2.price)
  );

  print(temp_smartphones, id); //display element
}

/**
 * sort element by price high to low
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function highToLow(json_arr, id) {
  let temp_smartphones = JSON.parse(JSON.stringify(json_arr)); //create copy

  temp_smartphones.sort(
    //sort element
    (item1, item2) => parsePrice(item2.price) - parsePrice(item1.price)
  );

  print(temp_smartphones, id); //display element
}

/**
 * sort element by popularity
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function popular(json_arr, id) {
  print(json_arr, id); //display element
}

/**
 * filter element from price between (from , to)
 * @param {object} json_arr data of page
 * @param {number} id id of page
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

  print(temp_smartphones, id); //display element
}

/**
 * display element in page by id
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function print(json_arr, id) {
  document.getElementById(id).innerHTML = ""; //clean the old element
  json_arr.forEach((val) => addToBox(val, id));

  //   for (let i = 0; i < json_arr.length; i++) {
  //     if (i == 4) addBanaras(id);
  //     addToBox(json_arr[i], id);
  //   }
}

function filterByCompany() {}

function filterByColor() {}

function changeView() {}
