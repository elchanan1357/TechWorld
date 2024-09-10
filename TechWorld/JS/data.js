//when window is on loading
window.onload = function () {
  smartphones_arr.forEach((val) => addToHtml(val));
};

//create elements in store
function addToHtml(_json) {
  let mainBox = document.createElement("div"); //create col in row
  mainBox.className = "mainBox col-lg-3 border p-2";
  document.getElementById("Smartphone").appendChild(mainBox);

  //add element to the site
  mainBox.innerHTML += `
  <div class="picBox mx-auto mt-4">
  <img class="image img-fluid" src="../Images/Smartphone/${_json.image}" alt="${_json.name}" >
  </div>
  
  <div class="middleBox mt-3">
     <img class="logo img-fluid" src="../Images/Smartphone/${_json.logo}" alt="${_json.company}" >
    <br>
    <p class="m-1">${_json.details}</p>
    <br>
  </div>

   <div class="delivery">
      <div class="icon_delivery p-1 mx-4">  
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck mb-2" viewBox="0 0 16 16">
         <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg>
      </div>
      משלוח חינם לבית\\נקודת איסוף            
  </div>


  <div class="bottomBox mt-5">
  <button class="cartButton m-4" >
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
  </button>
 
     <h3 id="price"  class="mt-4">${_json.price}</h3>
  </div>
  `;
}

//w-75 d-block mx-auto mb-2

//all type of smartphone in the store
let smartphones_arr = [
  {
    image: "a_15_pro _max.jpg",
    logo: "logo_apple.jpg",
    name: "iPhone",
    type: "15 Pro Max",
    company: "Apple",
    color: "Black",
    details:
      "Apple iPhone 15 Pro Max 256GB - Black Titanium - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪5,429",
  },
  {
    image: "a_15.jpg",
    logo: "logo_apple.jpg",
    name: "iPhone",
    type: "15",
    company: "Apple",
    color: "White",
    details:
      "Apple iPhone 15 256GB - Black - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪4,949",
  },
  {
    image: "a_14_plus.webp",
    logo: "logo_apple.jpg",
    name: "iPhone",
    type: "14 Plus",
    company: "Apple",
    color: "White",
    details:
      "Apple iPhone 14 Plus 128GB - Blue - 1 Year Warranty by the Official Distributor - Without Charger and Without Headphones",
    price: "₪2,899",
  },
  {
    image: "a_13.jpg",
    logo: "logo_apple.jpg",
    name: "iPhone",
    type: "13",
    company: "Apple",
    color: "Black",
    details:
      "Apple iPhone 13 128GB Starlight - 1 Year Warranty by The Official Distributor - Without Charger And Without Headphones",
    price: "₪2,499",
  },

  {
    image: "s_s24_ultra.jpg",
    logo: "logo_Samsung.jpg",
    name: "Galaxy",
    type: "S24 Ultra",
    company: "Samsung",
    color: "White",
    details: "",
    price: "₪4,649",
  },
  {
    image: "s_a35.jpg",
    logo: "logo_Samsung.jpg",
    name: "Galaxy",
    type: "A35",
    company: "Samsung",
    color: "Black",
    details: "",
    price: "₪3,645",
  },
  {
    image: "s_s21_fe.jpg",
    logo: "logo_Samsung.jpg",
    name: "Galaxy",
    type: "S21 FE",
    company: "Samsung",
    color: "White",
    details: "",
    price: "₪1,490",
  },
  {
    image: "",
    name: "Galaxy",
    logo: "logo_Samsung.jpg",
    type: "Note 20 Ultra",
    company: "Samsung",
    color: "Black",
    details: "",
    price: "₪4,649",
  },
  {
    image: "x_13_pro+.jpg",
    logo: "logo_Xiaomi.jpg",
    name: "Redmi",
    type: "Note 13 pro+",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪1,720",
  },
  {
    image: "x_12.webp",
    logo: "logo_Xiaomi.jpg",
    name: "Redmi",
    type: "12",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪559",
  },
  {
    image: "x_paco_m6.jpg",
    logo: "logo_Xiaomi.jpg",
    name: "Poco",
    type: "M6",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪699",
  },
  {
    image: "x_a3.jpg",
    logo: "logo_Xiaomi.jpg",
    name: "Redmi",
    type: "A3",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪389",
  },
];
