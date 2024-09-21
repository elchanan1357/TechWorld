const linkConfigs = [
  { href: 'Sales.html', img: '../Images/index/sale.png' },
  {
    href: 'https://www.calcalist.co.il/calcalistech/category/3778',
    img: '../Images/index/whats-new.jpg',
  },
];
let currentIndex = 0;

// function replaceLink() {
//   const link = document.getElementById('dynamicLink');
//   const img = document.getElementById('dynamicImage');

//   currentIndex = (currentIndex + 1) % linkConfigs.length; // Cycle through the links
//   link.href = linkConfigs[currentIndex].href;
//   img.src = linkConfigs[currentIndex].img;
// }

// // Change link every 2.5 seconds
// setInterval(replaceLink, 2500);

// Function to get random items from a category array
function getRandomProducts(categoryArray, numberOfItems) {
  const shuffledArray = [...categoryArray].sort(() => 0.5 - Math.random());
  console.log('first log: ' + shuffledArray)
  return shuffledArray.slice(0, numberOfItems); 
}

// Function to display random products on the homepage
function displayRandomProducts() {

  // Get random products from each category
  const randomSmartphones = getRandomProducts(allProducts.smartphones_arr, 4);
  const randomTablets = getRandomProducts(allProducts.tablets_arr, 3);        
  const randomComputers = getRandomProducts(allProducts.computers_arr, 3);    
  const randomProps = getRandomProducts(allProducts.props_arr, 4);            

  // Display products on the homepage using the addToBox function
  randomSmartphones.forEach(product => addToBox(product, 'Smartphones'));
  randomTablets.forEach(product => addToBox(product, 'Tablets'));
  randomComputers.forEach(product => addToBox(product, 'Computers'));
  randomProps.forEach(product => addToBox(product, 'Props'));
}

// Call the function to display products when the page loads
window.onload = function() {
  displayRandomProducts();
};
