let items = getItemsFromCart();
let totalPrice = 0;

function renderItems() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';
  totalPrice = 0;

  items.forEach((item) => {
    const row = itemRow();
    const box = itemBox();
    totalPrice += item.price * item.amount;

    row.appendChild(box);
    row.appendChild(divider());

    const itemProperties = [
      itemImg(`../Images/${item.imageSrc}`),
      itemNameAndPrice(item),
      increaseAmount(item),
      itemAmount(item),
      decreaseAmount(item),
      itemTrashIcon(item),
    ];

    itemProperties.forEach((property) => box.appendChild(property));
    itemList.appendChild(row);
  });

  renderTotalPrice();
}

function renderTotalPrice() {
  const totalElem = document.getElementById('total-price');
  totalElem.textContent = `${totalPrice.toFixed(2)} ₪`;
}

function renderItemPriceAndAmount(item) {
  const price = document.getElementById(itemPriceId(item));
  price.textContent = `${item.price.toFixed(2)} ₪`;

  const amount = document.getElementById(itemAmountId(item));
  amount.textContent = item.amount;
}

function itemPriceId(item) {
  return `item-price-${item.id}`;
}

function itemAmountId(item) {
  return `item-amount-${item.id}`;
}

function handlePaymentAlert() {
  const form = document.getElementById('payment-form');
  const successAlert = document.getElementById('success-alert');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    successAlert.classList.remove('d-none');
    successAlert.classList.add('d-block');
  });
}

window.onload = function () {
  renderItems();
  handlePaymentAlert();
};

function itemRow() {
  return getDiv('row mb-3');
}

function itemBox() {
  return getDiv(
    'd-flex justify-content-start align-items-center justify-content-between',
  );
}

function itemImg(imgSrc) {
  const div = getDiv("col-2");
  const img = document.createElement('img');
  img.style = 'width: 80%; height: auto;';
  img.src = imgSrc;
  img.alt = 'Item image';
  div.appendChild(img);
  return div;
}

function itemNameAndPrice(item) {
  const div = getDiv('container mx-1');
  div.style = 'width: 30%';
  div.appendChild(itemName(item.name));
  div.appendChild(itemPrice(item));
  return div;
}

function itemName(name) {
  const nameElem = document.createElement('h6');
  nameElem.textContent = name;
  return nameElem;
}

function itemPrice(item) {
  const priceElem = document.createElement('h5');
  priceElem.id = itemPriceId(item);
  priceElem.textContent = `${item.price.toFixed(2)} ₪`;
  priceElem.className = 'mt-3';
  return priceElem;
}

function getDiv(className) {
  const div = document.createElement('div');
  div.className = className;
  return div;
}

function getButton(content) {
  const button = document.createElement('button');
  button.textContent = content;
  button.className = 'btn btn-light';
  button.type = 'button';
  return button;
}

function itemAmount(item) {
  const amountElem = document.createElement('h5');
  amountElem.id = itemAmountId(item);
  amountElem.textContent = item.amount;
  amountElem.className = 'mb-0';
  return amountElem;
}

function itemTrashIcon(item) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const button = getButton('');
  const svg = document.createElementNS(svgNS, 'svg');
  const path = document.createElementNS(svgNS, 'path');

  button.className = 'btn';
  svg.class = 'bi bi-trash3-fill';

  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('fill', 'currentColor');
  path.setAttribute(
    'd',
    'M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5',
  );

  svg.appendChild(path);
  button.appendChild(svg);

  button.onclick = () => {
    totalPrice -= item.price * item.amount;
    items.splice(items.indexOf(item), 1);
    renderItems();
  };

  return button;
}

function divider() {
  const div = getDiv('d-flex justify-content-center mt-4');
  const hr = document.createElement('hr');
  hr.style = 'width: 100%;';
  hr.className = 'custom-line';
  div.appendChild(hr);
  return div;
}

function increaseAmount(item) {
  return changeAmountButton(item, '+');
}

function decreaseAmount(item) {
  return changeAmountButton(item, '-');
}

function changeAmountButton(item, operator) {
  const button = getButton(operator);
  button.onclick = () => updateItemAndTotalPrices(item, operator);
  return button;
}

function updateItemAndTotalPrices(item, operator) {
  if (operator === '+') {
    if (!isAmountAvailable(item.id, item.amount + 1)) {
      alert("More from this item is not available at the moment. Please check again later");
      return;
    }
    item.amount++;
    totalPrice += item.price;
  } else if (item.amount > 1 && operator === '-') {
    item.amount--;
    totalPrice -= item.price;
  }

  renderItemPriceAndAmount(item);
  renderTotalPrice();
}

function getItemsFromCart() {
  const items = JSON.parse(localStorage.getItem("cart_arr"));
  const result = [];

  items.forEach(item => {
    let foundItem = result.find((each) => each.id === item.id);
    if (foundItem !== undefined) {
      foundItem.amount++;
    } else {
      result.push({id: item.id, name: item.name, amount: 1, imageSrc: item.image, price: toNumber(item.price)})
    }
  });

  return result;
}

function toNumber(str) {
  return Number(str.replace(/[^0-9]/g, ''));
}
