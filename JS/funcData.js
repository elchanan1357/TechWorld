/**
 * create the top line in the inner page
 */
function createTopLine() {
  let topLine = document.getElementById("topLine");
  topLine.innerHTML = buildTopLine(); //return the html  of top line
}

/**
 * create the button's arrow is in the top line
 * @param {string} _up id of arrow up
 * @param {string} _down id of arrow down
 * @param {number} i position in class
 * @returns {void}
 */
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
/**
 * in the top line
 * in the buttons
 * display list of items belongs to the button
 * @param {string} _id id of list
 * @param {number} i  position in the class
 * @returns {void}
 */
function displayElement(_id, i) {
  let list = document.getElementById(_id);
  if (i == -1) {
    //not contain arrow
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

/**
 * create elements in all inner page
 * into the box
 * @param {object} _json data of box like the image and icon
 * @param {number} _id id of the main box
 */
function addToBox(_json, _id) {
  let mainBox = document.createElement("div"); //create col in row
  mainBox.className = "mainBox col-md-3 border p-2";
  document.getElementById(_id).appendChild(mainBox);

  //add element to the site
  mainBox.innerHTML = buildBox(_json); //return the html of box

  //create button in the box that add  elements to favorites
  mainBox
    .querySelector(".icon_favorites")
    .addEventListener("click", function () {
      favorites(_json, this);
    });

  //create button in the box that add  elements to cart
  mainBox.querySelector(".cartButton").addEventListener("click", function () {
    addToCart(_json);
  });
}

let favorites_arr = JSON.parse(localStorage.getItem("favorites_arr")) || [];
/**
 * add to favorites
 * @param {object} product the product favorite
 * @param {*} buttonElement
 */
function favorites(product, buttonElement) {
  //if the product already exist
  let exists = favorites_arr.some((item) => item.id === product.id);

  if (!exists) {
    //add to favorites
    favorites_arr.push(product);
    alert("Add to favorites successfully");
    buttonElement.style.color = "red";
  } else {
    // remove from favorites
    favorites_arr = favorites_arr.filter(
      (favorites_arr) => favorites_arr.id !== product.id
    );

    alert("remove from favorites successfully");
    buttonElement.style.color = "black";
  }

  localStorage.setItem("favorites_arr", JSON.stringify(favorites_arr));
}

/**
 * save the color of favorites icon
 */
function saveFavoritesInPrint() {
  let favoriteMap = {}; //create map off favorite item

  favorites_arr.forEach((favorite) => {
    //init items in map
    favoriteMap[favorite.id] = true;
  });

  let productElements = document.querySelectorAll(".mainBox"); //get all element in page

  productElements.forEach((element) => {
    let productID = parseInt(
      element.querySelector(".id").innerText.split(":")[1]
    );

    //check if item exist in the map
    if (favoriteMap[productID]) {
      let favoriteButton = element.querySelector(".icon_favorites");
      favoriteButton.style.color = "red";
    }
  });
}

let cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];
/**
 * add to favorites
 * @param {object} product the product favorite
 * @param {*} buttonElement
 */
function addToCart(product) {
  //if the product already exist
  let exists = cart_arr.find((item) => item.id === product.id);

  const amount = getProductAmount(product.id);

  if (!exists && amount > 0) {
    //add to favorites
    cart_arr.push(product);
    alert("Add to cart successfully");
    updateStockAmount(product.id, -1);
    
  } else if (exists) {
    alert("The item in cart. You can add in cart");
  } else {
    alert("The item is not in stock");
  }

  localStorage.setItem("cart_arr", JSON.stringify(cart_arr));
}
