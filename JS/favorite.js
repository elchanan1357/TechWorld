const favoriteItems = JSON.parse(localStorage.getItem('favorites_arr')) || []; //get favorite items

function displayFavoriteItems() {
  const favoriteContainer = document.getElementById('favoriteItems');

  if (favoriteItems.length === 0)
    favoriteContainer.innerHTML = '<p>No Favorites Yet...</p>';
  else
    favoriteItems.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'favorite-item';

      itemElement.innerHTML = createHtmlFavorites(item); //display element
      favoriteContainer.appendChild(itemElement);

      itemElement
        .querySelector('.cartButton')
        .addEventListener('click', () => {});
    });
}

/**
 * create the html for display items
 * @param {object} i favorite item
 */
function createHtmlFavorites(item) {
  return `
    <div class="item-details">
      <h2>${item.name} - ${item.type}</h2>
      <p>${item.details}</p>
      <div style="display: flex; align-items: center;">
        <button class="cartButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
          </svg>
        </button>
        <p>   <strong>price:</strong>  ${item.price} </p>
      </div>
    </div>
    <img src="../Images/${item.image}" alt="${item.name}" width="100">
  `;
}

displayFavoriteItems();
