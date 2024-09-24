// DB of all inventory of the store
const local_storage_inventory_name = "inventory";
let inventory_DB = [
  { id: "40047", type: "Galaxy A35", amount: 4, image: "Smartphone/s_a35.jpg" },
  { id: "40048", type: "iPhone 15", amount: 5, image: "Smartphone/a_15.jpg" },
  { id: "40049", type: "Redmi A3", amount: 2, image: "Smartphone/x_a3.jpg" },
  {
    id: "40050",
    type: "Galaxy S21 FE",
    amount: 5,
    image: "Smartphone/s_s21_fe.jpg",
  },
  {
    id: "40051",
    type: "iPhone 15 Pro Max",
    amount: 9,
    image: "Smartphone/a_15_pro _max.jpg",
  },
  {
    id: "40052",
    type: "Galaxy S24 Ultra",
    amount: 4,
    image: "Smartphone/s_s24_ultra.jpg",
  },
  {
    id: "40053",
    type: "Redmi Note 13 pro+",
    amount: 8,
    image: "Smartphone/x_13_pro+.jpg",
  },
  {
    id: "40054",
    type: "iPhone 14 Plus",
    amount: 6,
    image: "Smartphone/a_14_plus.jpg",
  },
  { id: "40055", type: "iPhone 13", amount: 10, image: "Smartphone/a_13.jpg" },
  {
    id: "40056",
    type: "Galaxy Note 20 Ultra",
    amount: 1,
    image: "Smartphone/s_note_20.jpg",
  },
  { id: "40057", type: "Redmi 12", amount: 5, image: "Smartphone/x_12.jpg" },
  {
    id: "40058",
    type: "Poco M6",
    amount: 3,
    image: "Smartphone/x_paco_m6.jpg",
  },

  {
    id: "30025",
    type: "AirPods Max",
    amount: 6,
    image: "props/AirPodsMax.jpg",
  },
  { id: "30026", type: "QuietComfort", amount: 2, image: "props/sony2.jpg" },
  { id: "30027", type: "WH1000XM4", amount: 9, image: "props/sony1.jpg" },
  {
    id: "30028",
    type: "AirPods Pro 2",
    amount: 4,
    image: "props/AirPodsPro2.jpg",
  },
  { id: "30029", type: "MX Master 3S", amount: 3, image: "props/mouse1.jpg" },
  { id: "30030", type: "Magic Mouse", amount: 7, image: "props/mouse2.jpg" },
  { id: "30031", type: "Basilisk V3 X", amount: 1, image: "props/mouse3.jpg" },
  { id: "30032", type: "MX Keys S", amount: 5, image: "props/keyboard3.jpg" },
  {
    id: "30033",
    type: "MX Mechanical",
    amount: 8,
    image: "props/Keyboard2.jpg",
  },
  {
    id: "30034",
    type: "Magic Keyboard",
    amount: 2,
    image: "props/Keyboard1.jpg",
  },
  {
    id: "30035",
    type: "Wireless Charging Pad",
    amount: 7,
    image: "props/WirelessChargingPad.jpg",
  },
  {
    id: "30036",
    type: "12W USB",
    amount: 6,
    image: "props/Apple_Power_Adapter.jpg",
  },
  { id: "30037", type: "735 65W", amount: 9, image: "props/Anker735.jpg" },
  {
    id: "30038",
    type: "Lightning Charging Cable",
    amount: 1,
    image: "props/Cable.jpg",
  },

  {
    id: "20013",
    type: "iPad 13-inch iPad Pro M4",
    amount: 5,
    image: "Tablets/a_pro_m4.jpg",
  },
  {
    id: "20014",
    type: "iPad 11-inch iPad Air M2",
    amount: 2,
    image: "Tablets/a_11_air.jpg",
  },
  {
    id: "20015",
    type: "iPad 13-inch iPad Air M2",
    amount: 3,
    image: "Tablets/a_13__air.jpg",
  },
  {
    id: "20016",
    type: "iPad 10.9-Inch iPad",
    amount: 7,
    image: "Tablets/a_10.9.jpg",
  },
  {
    id: "20017",
    type: "Galaxy Tab S9",
    amount: 6,
    image: "Tablets/GalaxyTabS9.jpg",
  },
  {
    id: "20018",
    type: "Galaxy Tab S9 Ultra",
    amount: 1,
    image: "Tablets/GalaxyTabS9Ultra.jpg",
  },
  {
    id: "20019",
    type: "Galaxy Tab S6 Lite",
    amount: 8,
    image: "Tablets/GalaxyTabS6Lite.jpg",
  },
  {
    id: "20020",
    type: "Galaxy Tab A9+",
    amount: 4,
    image: "Tablets/GalaxyTabA9+.jpg",
  },
  {
    id: "20021",
    type: "Lenovo TAB P12",
    amount: 9,
    image: "Tablets/LenovoP12.jpg",
  },
  {
    id: "20022",
    type: "Lenovo Tab P11 2nd Gen",
    amount: 6,
    image: "Tablets/LenovoTabP11.jpg",
  },
  {
    id: "20023",
    type: "Lenovo Yoga TAB 11",
    amount: 7,
    image: "Tablets/LenovoYogaTAB11.jpg",
  },
  {
    id: "20024",
    type: "Lenovo TAB Plus",
    amount: 10,
    image: "Tablets/LenovoTABPlus.jpg",
  },

  {
    id: "50087",
    type: "MacBook Air 13 M2",
    amount: 3,
    image: "Computers/a_air_13.jpg",
  },
  {
    id: "50088",
    type: "MacBook Pro 14 M3",
    amount: 4,
    image: "Computers/a_pro_14.jpg",
  },
  {
    id: "50089",
    type: "MacBook Pro 16 M3",
    amount: 8,
    image: "Computers/a_pro_16.jpg",
  },
  {
    id: "50090",
    type: "MacBook Air 15 M2",
    amount: 5,
    image: "Computers/a_air_15.jpg",
  },
  {
    id: "50091",
    type: "Yoga Slim 7x",
    amount: 2,
    image: "Computers/l_yoga_slim_x7.jpg",
  },
  {
    id: "50092",
    type: "Ideapad 1",
    amount: 6,
    image: "Computers/l_ideapad_1.jpg",
  },
  {
    id: "50093",
    type: "Legion Pro 5i",
    amount: 9,
    image: "Computers/l_Legion_Pro.jpg",
  },
  {
    id: "50094",
    type: "LOQ 15.6 Gaming",
    amount: 7,
    image: "Computers/l_LOQ.jpg",
  },
  { id: "50095", type: "XPS 13", amount: 3, image: "Computers/d_xps_13.jpg" },
  {
    id: "50096",
    type: "Inspiron 16 2-in-1",
    amount: 5,
    image: "Computers/d_Inspiron.jpg",
  },
  {
    id: "50097",
    type: "OmniBook X",
    amount: 6,
    image: "Computers/h_OmniBook.jpg",
  },
  {
    id: "50098",
    type: "Spectre 2-in-1",
    amount: 4,
    image: "Computers/h_Spectre.jpg",
  },
];

// Set DB in local storage
localStorage.setItem(
  local_storage_inventory_name,
  JSON.stringify(inventory_DB)
);

const inventory =
  JSON.parse(localStorage.getItem(local_storage_inventory_name)) || [];

// /**
//  * Generate row on a Vanilla HTML table
//  */
// function displayInventory(stock = getInventory()) {
//   const inventoryTableBody = document.getElementById('inventory-table-body');
//   inventoryTableBody.innerHTML = '';

//   stock.forEach((item) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${item.id}</td>
//       <td>${item.type}</td>
//       <td>${item.amount}</td>
//         <td><img src="../images/${item.image}" alt="${item.type}" style="width: 100px; height: auto;"></td>
//     `;
//     inventoryTableBody.appendChild(row);
//   });
// }

/**
 * Using bootstrap to display items in stock
 */
function displayInventory(stock = getInventory()) {
  const container = document.getElementById("inventory-container");
  container.innerHTML = "";

  if (stock.length === 0) {
    container.innerHTML = "<p>No inventory items found.</p>";
    return;
  }
  stock.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("col-md-2", "mb-2");

    itemElement.innerHTML = `
        <div class="card h-100">
          <img src="../Images/${item.image}" class="card-img-top" alt="${item.type}">
          <div class="card-body">
            <h5 class="card-title">${item.type}</h5>
            <p class="card-text"><strong>ID:</strong> ${item.id}</p>
            <p class="card-text"><strong>Available:</strong> ${item.amount}</p>
          </div>
        </div>
      `;
    container.appendChild(itemElement);
  });
}

/**
 * @description filter data according to search bar
 */
const filteredProducts = () => {
  const value = document.getElementById("search").value.toLowerCase();
  const _filteredProducts = getInventory().filter(
    (product) =>
      product.type.toLowerCase().includes(value) || product.id.includes(value)
  );

  displayInventory(_filteredProducts);
};

displayInventory();

// Stock API
/**
 * @description get product ID (from our existing product id) and add amount
 * @param {number} productId
 * @param {number} amount
 * @returns void
 * @throws alert if product id not found
 */
function addToInventory(productId, amount) {
  let inventory = JSON.parse(
    localStorage.getItem(local_storage_inventory_name)
  );

  const product = inventory.find((item) => item.id == productId);
  if (product) {
    product.amount += amount;
    localStorage.setItem(
      local_storage_inventory_name,
      JSON.stringify(inventory)
    );

    // Represent real time data
    displayInventory();
  } else {
    console.log(product);

    alert("This product ID is not in our inventory");
  }
}

/**
 * @description Remove quantity on existing product.
 * @yields if product not found or quantity is bigger then exist
 * @param {number} productId
 * @param {number} amount
 */
function removeFromInventory(productId, amount) {
  let inventory = JSON.parse(
    localStorage.getItem(local_storage_inventory_name)
  );

  const product = inventory.find((item) => item.id == productId);

  if (product && product.amount >= amount) {
    product.amount -= amount;
    localStorage.setItem(
      local_storage_inventory_name,
      JSON.stringify(inventory)
    );

    // Represent real time data
    displayInventory();
  } else if (product && product.amount < amount) {
    alert("The quantity you wish to decrease is bigger than the existing");
  } else {
    alert("Product ID not found");
  }
}

/**
 *
 * @returns {Array<Record<'id' | 'type' | 'amount' | 'image', number | string>>}
 */
function getInventory() {
  const d =
    JSON.parse(localStorage.getItem(local_storage_inventory_name)) || [];
  console.log("return data");
  console.log(d);
  return d;
}

// Throwing users without access out
document.addEventListener("DOMContentLoaded", function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData || userData.firstName.toLowerCase() !== "admin") {
    // alert('Access denied!');
    window.location.href = "index.html";
  }
  displayInventory();
});

function isAmountAvailable(itemId, requestedAmount) {
  const data =
    JSON.parse(localStorage.getItem(local_storage_inventory_name)) || [];

  let found = false;
  data.forEach((item) => {
    if (item.id == itemId) found = true;
  });
  return found;
}
