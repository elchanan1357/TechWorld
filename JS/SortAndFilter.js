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
    console.log(to + "  " + from);
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

/**
 * display element in page by id
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function print(json_arr, id) {
  document.getElementById(id).innerHTML = ""; //clean the old element
  // json_arr.forEach((val) => addToBox(val, id));

  for (let i = 0; i < json_arr.length; i++) {
    if (i == 4) addBanner(id);

    addToBox(json_arr[i], id);
  }

  saveFavoritesInPrint();
}

/**
 * add banner to page
 * and so that every second image change
 * @param {string} id id of page
 */
function addBanner(id) {
  //all images
  const images = [
    "../Images/Banars/banner_homePage/1.jpg",
    "../Images/Banars/banner_homePage/2.jpg",
    "../Images/Banars/banner_homePage/3.jpg",
    "../Images/Banars/banner_homePage/4.jpg",
    "../Images/Banars/banner_homePage/5.jpg",
    "../Images/Banars/banner_homePage/6.jpg",
    "../Images/Banars/banner_homePage/7.jpg",
    "../Images/Banars/banner_homePage/8.jpg",
    "../Images/Banars/banner_homePage/9.jpg",
  ];

  let span = document.getElementById(id);
  let i = 0;

  if (span) {
    // Create a new img element instead of using innerHTML
    let bannerImg = document.createElement("img");
    bannerImg.className = "img-fluid";
    bannerImg.id = "bannerImg";
    bannerImg.src = images[i];
    bannerImg.alt = "banner";

    // Append the image to the container
    span.appendChild(bannerImg);

    // Set the interval to change the image every second
    setInterval(() => {
      i = (i + 1) % images.length; // Update index and loop back after the last image
      bannerImg.src = images[i]; // Change the image source
    }, 3000);
  }
}
