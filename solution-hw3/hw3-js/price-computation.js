console.log("Hello world");
const basePrice = 2.49;

// When the page loads, find the select element.
//show options dynamically, linking glazing dropdown in HTML
const selectContainer = document.querySelector("#glazingOptions");
console.log(selectContainer);
{
  /* <option value="Keep original">Keep original</option> */
}
const option = document.createElement("option"); // <option></option>
option.text = "Keep Original"; //  <option> Keep Original </option>
option.value = "0.00"; //  <option value="keep-original"> Keep Original </option>
selectContainer.appendChild(option);
console.log(selectContainer);
const option2 = document.createElement("option");
option2.text = "Sugar milk";
option2.value = "0.00";
selectContainer.appendChild(option2);
const option3 = document.createElement("option");
option3.text = "Vanilla milk";
option3.value = "0.50";
selectContainer.appendChild(option3);
const option4 = document.createElement("option");
option4.text = "Double chocolate";
option4.value = "1.50";
selectContainer.appendChild(option4);

const selectContainer2 = document.querySelector("#packoptions");

const option5 = document.createElement("option");
option5.text = "1"; //  <option> Keep Original </option>
option5.value = "1"; //  <option value="keep-original"> Keep Original </option>
selectContainer2.appendChild(option5);
console.log(selectContainer2);
const option6 = document.createElement("option");
option6.text = "3";
option6.value = "3";
selectContainer2.appendChild(option6);
const option7 = document.createElement("option");
option7.text = "6";
option7.value = "5";
selectContainer2.appendChild(option7);
const option8 = document.createElement("option");
option8.text = "12";
option8.value = "10";
selectContainer2.appendChild(option8);

//creating object for glazing
const glazingAdapt = [
  { glaze: "Keep Original", price: 0.0 },
  { glaze: "Sugar Milk", price: 0.0 },
  { glaze: "Vanilla Milk", price: 0.5 },
  { glaze: "Double Chocolate", price: 1.5 },
];

const packList = [
  { size: "1", priceMultiply: 1 },
  { size: "3", priceMultiply: 3 },
  { size: "6", priceMultiply: 5 },
  { size: "12", priceMultiply: 10 },
];

//for loop
for (let i = 0; i < glazingAdapt.length; i++) {
  let glazeSelect = glazingAdapt[i];

  //adds space to put in each option
  var options = document.createElement("options");

  //adds into there, taking glaze name from list
  options.textContent = glazeSelect.glaze;

  //adds the value/price
  options.value = glazeSelect.price;

  //adding everything into the dropdown in HTML
  selectContainer.append(options);
}

for (let i = 0; i < packList.length; i++) {
  let packSelect = packList[i];

  //adds space to put in each option
  var options = document.createElement("options");

  //adds into there, taking pack size from list
  options.textContent = packSelect.size;

  //adds the value/price
  options.value = packSelect.priceMultiply;

  //adding everything into the dropdown in HTML
  selectContainer.append(options);
}

function glazingChange(element) {
  // get value of selected glazing option
  const glazingPrice = parseFloat(element.value);

  packMenu = document.getElementById("packoptions");
  var packPrice = parseFloat(packMenu.value);

  var newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  var totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = "$" + newPrice;
}

function packChange(element) {
  // get value of selected pack size option
  const packPrice = parseFloat(element.value);

  var glazingMenu = document.getElementById("glazingOptions");
  var glazingPrice = parseFloat(packMenu.value);

  // updating price
  var newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  var totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = "$" + newPrice;
}
