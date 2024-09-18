//create top line
function createTopLine() {
  let topLine = document.getElementById("topLine");

  topLine.innerHTML = `
         <div class="share col-lg-4">
            <button
              class="share-btn text-center"
              onclick="displayElement('linkTechWorld',-1)"
            >
              Share
            </button>

            <div class="text-center" id="linkTechWorld">
              copy link <a href="#">TechWorld</a>
            </div>
          </div>

          <div class="col-lg-8 row">
            <div class="col-lg-6"></div>
            <div class="col-lg-3 text-end sort">
              <button class="sort-btn" onclick="displayElement('sortList',0)">
                sort
                <!-- arrow down -->
                <span class="arrow_down"> </span>

                <!-- arrow up -->
                <span class="arrow_up" style="display: none"> </span>
              </button>

              <div
                id="sortList"
                class="text-end sort_list"
                style="background: white"
              >
                <button onclick="lowToHigh()">מחיר נמוך לגבוה</button>
                <button onclick="highToLow()">מחיר גבוה לנמוך</button>
                <button onclick="popular()">המוצרים הכי חמים</button>
              </div>
            </div>

            <div class="col-lg-3 text-end filter">
              <button
                class="filter-btn"
                onclick="displayElement('listFiltering',1)"
              >
                Filtering
                <!-- arrow down -->
                <span class="arrow_down"> </span>

                <!-- arrow up -->
                <span class="arrow_up" style="display: none"> </span>
              </button>

              <div
                id="listFiltering"
                class="list_filtering"
                style="background: white"
              >
                <div>
                  <button onclick="displayElement('listPrice',2)">
                    Filtering by price
                    <!-- arrow down -->
                    <span class="arrow_down"> </span>

                    <!-- arrow up -->
                    <span class="arrow_up" style="display: none"> </span>
                  </button>
                  <div id="listPrice" style="display: none">
                    <div>
                      <input
                        id="toPrice"
                        class="ml-5"
                        type="number"
                        placeholder="5,429"
                        width="20px"
                      />

                      <input
                        id="fromPrice"
                        type="number"
                        placeholder="389"
                        width="20px"
                      />
                    </div>

                    <div class="position-relative mt-2" style="height: 40px">
                      <input
                        type="range"
                        class="form-range slider position-absolute top-0 start-0"
                        min="389"
                        max="5429"
                        id="priceRange"
                        value="389"
                        style="width: 100%"
                      />
                      <input
                        type="range"
                        class="form-range slider position-absolute top-0 start-0"
                        min="389"
                        max="5429"
                        id="priceRangeMax"
                        value="5429"
                        style="width: 100%"
                      />
                    </div>

                    <div class="filter-in">
                      <button onclick="filter()" class="mt-2">Filter</button>
                    </div>
                  </div>

                  <button
                    class="mt-2"
                    onclick="displayElement('listCompany',3)"
                  >
                    Company
                    <!-- arrow down -->
                    <span class="arrow_down"> </span>

                    <!-- arrow up -->
                    <span class="arrow_up" style="display: none"> </span>
                  </button>
                  <div
                    id="listCompany"
                    class="text-start m-1"
                    style="display: none"
                    id="Company"
                  >
                    <input type="checkbox" />
                    Apple
                    <br />
                    <input type="checkbox" />
                    Samsung
                    <br />
                    <input type="checkbox" />
                    Xiaomi
                  </div>

                  <button class="mt-2" onclick="displayElement('listColor',4)">
                    By Color
                    <!-- arrow down -->
                    <span class="arrow_down"> </span>

                    <!-- arrow up -->
                    <span class="arrow_up" style="display: none"> </span>
                  </button>
                  <div
                    class="text-start m-1"
                    id="listColor"
                    style="display: none"
                  >
                    <input type="checkbox" />
                    Black
                    <br />
                    <input type="checkbox" />
                    White
                    <br />
                    <input type="checkbox" />
                    Blue
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
}

//create elements in store
function addToBox(_json, _id) {
  let mainBox = document.createElement("div"); //create col in row
  mainBox.className = "mainBox col-lg-3 border p-2";
  document.getElementById(_id).appendChild(mainBox);

  //add element to the site
  mainBox.innerHTML = `
  <div class="picBox mx-auto mt-4">
  <img class="image" src="../Images/${_json.image}" alt="${_json.name}" >
  </div>
  
  <div class="middleBox mt-3">
     <img class="logo" src="../Images/${_json.logo}" alt="${_json.company}" >
    <br>
    <p class="m-1">${_json.details}</p>
    <br>
  </div>

   <div class="delivery">
      <div class="icon_delivery p-1 mx-4">  
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck mb-2" viewBox="0 0 16 16">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zM1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>

        </svg>
      </div>
      משלוח חינם לבית/נקודת איסוף            
  </div>


  <div class="bottomBox mt-5 text-center">
  <button class="cartButton m-4 d-flex text-start" >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
  </button>
 
     <h3 id="price"  class="mt-4 d-flex text-end">${_json.price}</h3>
  </div>
  `;
}

function createArrow(_up, _down, i) {
  //create arrow up
  document.getElementsByClassName(_up)[i].innerHTML = `         
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
              /></svg>`;
  //create arrow down
  document.getElementsByClassName(_down)[i].innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              /></svg>`;
}

let flag_display = false; //not display
function displayElement(_id, i) {
  let list = document.getElementById(_id);
  if (i == -1) {
    if (flag_display == false) {
      //if close then display
      list.style.display = "block";
      flag_display = true;
    } else {
      //close the list
      list.style.display = "none";
      flag_display = false;
    }
    return;
  }

  let arrowUp = document.getElementsByClassName("arrow_up")[i];
  let arrowDown = document.getElementsByClassName("arrow_down")[i];
  // if (arrowDown === "none" || arrowDown === "") {
  //   //need close the window
  //   //close the list
  //   list.style.display = "none";
  //   arrowDown.style.display = "inline";
  //   arrowUp.style.display = "none";
  //   flag_display = false;
  // } else {
  //   //open the window
  //   list.style.display = "block";
  //   arrowDown.style.display = "none";
  //   arrowUp.style.display = "inline";
  //   flag_display = true;
  // }

  if (flag_display == false) {
    //if close then display
    list.style.display = "block";
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline";
    flag_display = true;
  } else {
    //close the list
    list.style.display = "none";
    arrowDown.style.display = "inline";
    arrowUp.style.display = "none";
    flag_display = false;
  }
}

//casting to number
function parsePrice(price) {
  return parseFloat(price.replace(/[₪,]/g, "")); //remove tags
}

//sort element by price low to high
function lowToHigh(_id) {
  let temp_smartphones = JSON.parse(JSON.stringify(smartphones_arr)); //create copy

  temp_smartphones.sort(
    //sort element
    (item1, item2) => parsePrice(item1.price) - parsePrice(item2.price)
  );

  document.getElementById("Smartphone").innerHTML = ""; //clean the old element
  temp_smartphones.forEach((val) => addToBox(val, "Smartphone")); //add to html
}

//sort element by price low to high
function highToLow(_id) {
  let temp_smartphones = JSON.parse(JSON.stringify(smartphones_arr)); //create copy

  temp_smartphones.sort(
    //sort element
    (item1, item2) => parsePrice(item2.price) - parsePrice(item1.price)
  );

  document.getElementById("Smartphone").innerHTML = ""; //clean the old element
  temp_smartphones.forEach((val) => addToBox(val, "Smartphone")); //add to html
}

//sort element by popularity
function popular() {
  document.getElementById("Smartphone").innerHTML = ""; //clean the old element
  smartphones_arr.forEach((val) => addToBox(val, "Smartphone")); //add to html
}

function sortByCompany() {}

function priceFromAToB() {}

function changeView() {}

function reset() {}
