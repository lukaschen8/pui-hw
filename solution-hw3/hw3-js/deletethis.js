console.log("Hello world");
const basePrice = 2.49;
// function glazingChange(element) {
//   // get value of selected glazing option
//   const priceChange = element.value;

//   // add your code to do update the price ...
//   //step 1: find + get the value from productdetail.html
//   //   let element = document.querySelector("cartprice");
//   console.log("option:" + element.textContent);

//   //step 2: add price modifier based on glazing selection
//   if (element === "Keep original") {
//     priceChange = element.value + 0.0;
//   } else if (element === "Sugar milk") {
//     priceChange = element.value + 0.0;
//   } else if (element === "Vanilla milk") {
//     priceChange = element.value + 0.5;
//   } else if (element === "Double Chocolate") {
//     priceChange = element.value + 1.5;
//   }
// }

//object
const glazingObj = {
  KeepOriginal: 0.0,
  SugarMilk: 0.0,
  VanillaMilk: 0.5,
  DoubleChocolate: 1.5,
};

const packsizeObj = {
  packSize1: 1,
  packSize3: 3,
  packSize6: 6,
  packSize12: 12,
};

// When the page loads, find the select element.
//show options dynamically, linking glazing dropdown in HTML
let selectContainer = document.querySelector("#glazingOptions");
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

// const glazingAdapt = [
//   { glaze: "Keep Original", price: 0.0 },
//   { glaze: "Sugar Milk", price: 0.0 },
//   { glaze: "Vanilla Milk", price: 0.5 },
//   { glaze: "Double Chocolate", price: 1.5 },
// ];

// const packList = [
//   { size: "1", priceMultiply: 1 },
//   { size: "3", priceMultiply: 3 },
//   { size: "6", priceMultiply: 5 },
//   { size: "12", priceMultiply: 10 },
// ];
//cite soruce here
let glazingNames = Object.getOwnPropertyNames(glazingObj);

//for loop
for (let i = 0; i < glazingNames.length; i++) {
  let glazingName = glazingNames[i];
  console.log(glazingName);
  //adds space to put in each option
  let options = document.createElement("options");

  //adds into there, taking glaze name from list
  options.textContent = glazeName;
  //google js replace string character

  //adds the value/price
  options.value = glazeObj[glazeName];

  //adding everything into the dropdown in HTML
  selectContainer.append(options);
}

for (let i = 0; i < packList.length; i++) {
  let packSelect = packList[i];

  //adds space to put in each option
  let options = document.createElement("options");

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

  let packMenu = document.getElementById("packoptions");
  let packPrice = parseFloat(packMenu.value);

  let newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  let totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = "$" + newPrice;

  // add your code to do update the price ...
}

function packChange(element) {
  // get value of selected pack size option
  const packPrice = parseFloat(element.value);

  let glazingMenu = document.getElementById("glazingoptions");
  let glazingPrice = parseFloat(glazingMenu.value);

  // updating price
  let newPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  let totalPrice = document.getElementById("totalprice");
  totalPrice.innerHTML = "$" + newPrice;

  // add your code to do update the price ...
}
