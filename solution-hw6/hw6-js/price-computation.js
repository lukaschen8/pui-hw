//js page for price computation for drop down and options

const basePrice = rollPrice;

//creating array of objects for glazing
const glazingAdapt = [
  { glaze: "Keep Original", price: 0.0 },
  { glaze: "Sugar Milk", price: 0.0 },
  { glaze: "Vanilla Milk", price: 0.5 },
  { glaze: "Double Chocolate", price: 1.5 },
];

//array of objects for pack sizes
const packList = [
  { size: "1", priceMultiply: 1 },
  { size: "3", priceMultiply: 3 },
  { size: "6", priceMultiply: 5 },
  { size: "12", priceMultiply: 10 },
];

// When the page loads, find/retrieve the select element.
//show options dynamically, linking glazing dropdown in HTML

const glazeSelect = document.querySelector("#glazingOptions");

const packSelect = document.querySelector("#packoptions");

//for loop over array to create glazing options
for (let i = 0; i < glazingAdapt.length; i++) {
  let glazeObj = glazingAdapt[i];

  //adds space to put in each option
  let options = document.createElement("option");

  //adds info there, taking glaze name from list
  options.text = glazeObj.glaze;

  //adds the value/price
  options.value = glazeObj.price;

  //adding everything into the dropdown in HTML
  glazeSelect.add(options);
}

//for loop over array to create pack size options
for (let i = 0; i < packList.length; i++) {
  let packObj = packList[i];

  //adds space to put in each option
  let options = document.createElement("option");

  //adds info there, taking pack size from list
  options.text = packObj.size;

  //adds the value/price multiplier
  options.value = packObj.priceMultiply;

  //adding everything into the dropdown in HTML
  packSelect.add(options);
}

function glazingChange(element) {
  // get value of selected glazing option
  const glazingPrice = parseFloat(element.value);

  packMenu = document.getElementById("packoptions");
  let packPrice = parseFloat(packMenu.value);

  // updating total price
  let newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  let totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = "$" + newPrice;
}

function packChange(element) {
  // get value of selected pack size option
  const packPrice = parseFloat(element.value);

  let glazingMenu = document.getElementById("glazingOptions");
  let glazingPrice = parseFloat(glazingMenu.value);

  // updating total price
  let newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  let totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = "$" + newPrice;
}
