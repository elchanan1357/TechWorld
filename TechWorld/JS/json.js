//when window is on loading
window.onload = function () {
  smartphones_arr.forEach((val) => addToHtml(val));
};

//create elements in store
function addToHtml(_json) {
  let div = document.createElement("div");
  div.className = " box col-lg-3 border p-2";
  document.getElementById("Smartphone").appendChild(div);

  div.innerHTML += `
  <h2>${_json.name}</h2>
  <img src="../Images/Smartphone/${_json.image}" alt="${_json.name}" class="w-75 d-block mx-auto mb-2">
    <h3  class="py-5">${_json.price}</h3>
  `;
}

//all type of smartphone in the store
let smartphones_arr = [
  {
    image: "a_15_pro _max.jpg",
    name: "iPhone",
    type: "15 Pro Max",
    company: "Apple",
    color: "Black",
    details: "",
    price: "₪5,429",
  },
  {
    image: "a_15.jpg",
    name: "iPhone",
    type: "15",
    company: "Apple",
    color: "White",
    details: "",
    price: "₪4,949",
  },
  {
    image: "a_14_plus.webp",
    name: "iPhone",
    type: "14 Plus",
    company: "Apple",
    color: "White",
    details: "",
    price: "₪2,899",
  },
  {
    image: "a_13.jpg",
    name: "iPhone",
    type: "13",
    company: "Apple",
    color: "Black",
    details: "",
    price: "₪2,499",
  },

  {
    image: "s_s24_ultra.jpg",
    name: "Galaxy",
    type: "S24 Ultra",
    company: "Samsung",
    color: "White",
    details: "",
    price: "₪4,649",
  },
  {
    image: "s_a35.jpg",
    name: "Galaxy",
    type: "A35",
    company: "Samsung",
    color: "Black",
    details: "",
    price: "₪3,645",
  },
  {
    image: "s_s21_fe.jpg",
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
    type: "Note 20 Ultra",
    company: "Samsung",
    color: "Black",
    details: "",
    price: "₪4,649",
  },
  {
    image: "x_13_pro+.jpg",
    name: "Redmi",
    type: "Note 13 pro+",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪1,720",
  },
  {
    image: "x_12.webp",
    name: "Redmi",
    type: "12",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪559",
  },
  {
    image: "x_paco_m6.jpg",
    name: "Poco",
    type: "M6",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪699",
  },
  {
    image: "x_a3.jpg",
    name: "Redmi",
    type: "A3",
    company: "Xiaomi",
    color: "Black",
    details: "",
    price: "₪389",
  },
];
