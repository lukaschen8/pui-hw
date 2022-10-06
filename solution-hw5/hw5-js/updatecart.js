//create array to represent cart or should I use set?
// let shoppingCart = [];
const shoppingcartSet = new Set();

//creating class template for new roll
class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice, calculatedPrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = rollPrice;
    this.calculatedPrice = calculatedPrice;

    this.element = null; //ask abt this?
  }
}

//creating array of objects for glazing
let glazingAdapt = [
  { glaze: "Original", price: 0.0 },
  { glaze: "Sugar Milk", price: 0.0 },
  { glaze: "Vanilla Milk", price: 0.5 },
  { glaze: "Double Chocolate", price: 1.5 },
];

//array of objects for pack sizes
let packList = [
  { size: "1", priceMultiply: 1 },
  { size: "3", priceMultiply: 3 },
  { size: "6", priceMultiply: 5 },
  { size: "12", priceMultiply: 10 },
];

//fxn allows us to make new rolls and adds them to set
function addItems(rollType, rollGlazing, packSize) {
  let basePrice = rolls[rollType].basePrice;

  let glazeObject = glazingAdapt.find((o) => o.glaze === rollGlazing);
  let priceGlaze = glazeObject.price;
  console.log(priceGlaze);
  let packObject = packList.find((o) => o.size === packSize);
  let pricePackSize = packObject.priceMultiply;

  let calculatedPrice = (basePrice + priceGlaze) * pricePackSize;

  //calculate price
  const roll = new Roll(
    rollType,
    rollGlazing,
    packSize,
    basePrice,
    calculatedPrice
  );
  shoppingcartSet.add(roll);
  return roll;
}

//creating objects
const original = addItems("Original", "Sugar Milk", "1");
const walnut = addItems("Walnut", "Vanilla Milk", "12");
const raisin = addItems("Raisin", "Sugar Milk", "3");
const apple = addItems("Apple", "Original", "3");

//loop that iterates through the set to create each roll HTML
for (const roll of shoppingcartSet) {
  createElement(roll);
}

//grabs <template> in HTML
function createElement(roll) {
  //grab reference to roll template
  const template = document.querySelector("#roll-template");
  //get content inside of template and clone
  const clone = template.content.cloneNode(true);
  //store reference to newly copied element
  roll.element = clone.querySelector(".flexbox-containershop");

  //adding event listener
  const btnDelete = roll.element.querySelector(".underline removeleft");
  btnDelete.addEventListener("click", () => {
    deleteRoll(roll);
  });

  //grab reference to .roll-list in HTML
  const rollListElement = document.querySelector("#roll-list");

  //add newly created elements using append or prepend
  rollListElement.prepend(roll.element);

  updateElement(roll);
}

//adding total price at at btm
function updateTotalPrice() {
  let totalPrice = 0;
  for (const roll of rollSet) {
    totalPrice = totalPrice + rollcalculatedPrice;
  }
  const rollTotalPriceElement = document.querySelector("#totalamt");
  rollTotalPriceElement.innerText = "$" + totalPrice.toFixed(2);
}

//updates template in HTML to show cart rolls
function updateElement(roll) {
  //referring to rollsData file
  let rollImage = rolls[roll.type].imageFile;

  //grabbing ID tags in HTML
  const rollImageElement = roll.element.querySelector(".moveimg");
  const rollTypeElement = roll.element.querySelector("#typename");
  const rollGlazingElement = roll.element.querySelector("#glazing");
  const rollPackSizeElement = roll.element.querySelector("#pack-size");
  const rollBasePriceElement = roll.element.querySelector("#price");

  //replacing the HTML w roll data
  rollImageElement.src = "../solution-hw5/hw5-assets/" + rollImage;
  rollTypeElement.innerText = roll.type + "Cinnamon Roll";
  rollGlazingElement.innerText = "Glazing: " + roll.glazing;
  rollPackSizeElement.innerText = "Pack size: " + roll.size;
  rollBasePriceElement.innerText = "$" + roll.calculatedPrice.toFixed(2);

  //show total price in HTML
  updateTotalPrice();
}

//function to delete rolls
function deleteRoll(roll) {
  roll.element.remove();
  shoppingcartSet.delete(roll);

  //update total price when roll is deleted
  updateTotalPrice();
}
