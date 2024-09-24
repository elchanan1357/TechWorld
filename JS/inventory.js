// // DB of all inventory of the store
// let inventory = [
//   { id: '40047', type: 'A35', amount: 3 },
//   { id: '40048', type: '15', amount: 5 },
//   { id: '40049', type: 'A3', amount: 2 },
//   { id: '40050', type: 'S21 FE', amount: 5 },
//   { id: '40051', type: '15 Pro Max', amount: 9 },
//   { id: '40052', type: 'S24 Ultra', amount: 4 },
//   { id: '40053', type: 'Note 13 pro+', amount: 8 },
//   { id: '40054', type: '14 Plus', amount: 6 },
//   { id: '40055', type: '13', amount: 10 },
//   { id: '40056', type: 'Note 20 Ultra', amount: 1 },
//   { id: '40057', type: '12', amount: 5 },
//   { id: '40058', type: 'M6', amount: 3 },
//   { id: '30025', type: 'AirPods Max', amount: 6 },
//   { id: '30026', type: 'QuietComfort', amount: 2 },
//   { id: '30027', type: 'WH1000XM4', amount: 9 },
//   { id: '30028', type: '', amount: 4 },
//   { id: '30029', type: 'MX Master 3S', amount: 3 },
//   { id: '30030', type: '', amount: 7 },
//   { id: '30031', type: '', amount: 1 },
//   { id: '30032', type: 'MX Keys S', amount: 5 },
//   { id: '30033', type: 'MX Mechanical', amount: 8 },
//   { id: '30034', type: 'Magic Keyboard', amount: 2 },
//   { id: '30035', type: 'Wireless Charging Pad', amount: 7 },
//   { id: '30036', type: '12W USB', amount: 6 },
//   { id: '30037', type: '735 65W', amount: 9 },
//   { id: '30038', type: '-Lightning Charging Cable', amount: 1 },
//   { id: '20013', type: '13-inch iPad Pro M4', amount: 5 },
//   { id: '20014', type: '11-inch iPad Air M2', amount: 2 },
//   { id: '20015', type: '13-inch iPad Air M2', amount: 3 },
//   { id: '20016', type: '10.9-Inch iPad', amount: 7 },
//   { id: '20017', type: 'Galaxy Tab S9', amount: 6 },
//   { id: '20018', type: 'Galaxy Tab S9 Ultra', amount: 1 },
//   { id: '20019', type: 'Galaxy Tab S6 Lite', amount: 8 },
//   { id: '20020', type: 'Galaxy Tab A9+', amount: 4 },
//   { id: '20021', type: 'Lenovo TAB P12', amount: 9 },
//   { id: '20022', type: 'Lenovo Tab P11 2nd Gen', amount: 6 },
//   { id: '20023', type: 'Lenovo Yoga TAB 11', amount: 7 },
//   { id: '20024', type: 'Lenovo TAB Plus', amount: 10 },
//   { id: '50087', type: 'air 13 M2', amount: 3 },
//   { id: '50088', type: 'pro 14 M3', amount: 4 },
//   { id: '50089', type: 'pro 16 M3', amount: 8 },
//   { id: '50090', type: 'air 15 M2', amount: 5 },
//   { id: '50091', type: 'Slim 7x', amount: 2 },
//   { id: '50092', type: 'Ideapad 1', amount: 6 },
//   { id: '50093', type: 'Pro 5i', amount: 9 },
//   { id: '50094', type: 'LOQ 15.6 Gaming', amount: 7 },
// ];

// // שמירה ב-local storage
// localStorage.setItem('inventory', JSON.stringify(inventory));

// // קריאה מה-local storage
// const storedInventory = JSON.parse(localStorage.getItem('inventory'));
// console.log(storedInventory);

// //-------------------------------------------------
// //checking the amount in inventory to validate this purchase - returns boolean
// function checkInventory(product, i) {
//   const storedInventory = JSON.parse(localStorage.getItem('inventory'));

//   let exist = false;
//   storedInventory.forEach((item) => {
//     if (product.id === item.id && item.amount - i >= 0) exist = true;
//   });
//   console.log(exist);
//   return exist;
// }

// //adding items to the inventory
// function addToInventory(product, amountOfProducts) {
//   const storedInventory = JSON.parse(localStorage.getItem('inventory'));
//   storedInventory.forEach((item) => {
//     if (product.id === item.id) {
//       console.log(storedInventory[0]);
//       console.log('before change: ' + item.amount);

//       item.amount += amountOfProducts;

//       console.log('after change: ' + item.amount);
//       console.log(storedInventory[0]);
//     }
//   });
//   localStorage.setItem('inventory', JSON.stringify(inventory));
//   console.log(storedInventory[0]);
// }

// //remove

// function removeFromInventory(product, amountOfProducts) {
//   const storedInventory = JSON.parse(localStorage.getItem('inventory'));
//   storedInventory.forEach((item) => {
//     if (product.id === item.id) {
//       console.log(storedInventory[0]);
//       console.log('before change: ' + item.amount);

//       item.amount -= amountOfProducts;

//       console.log('after change: ' + item.amount);
//       console.log(storedInventory[0]);
//     }
//   });
//   localStorage.setItem('inventory', JSON.stringify(inventory));
// }

// checkInventory(smartphones_arr[0], 3);
// checkInventory(smartphones_arr[1], 1);

// addToInventory(smartphones_arr[0], 17);

// removeFromInventory(smartphones_arr[0], 5);

// // //-------------------------------------------------
