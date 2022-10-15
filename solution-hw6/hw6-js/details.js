//purpose: main set of js code for details

let cart = [];

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

console.log(params);

// Finally, we can access the parameter we want using the "get" method:
const rollType = params.get("roll");

console.log(rollType);

//access dictionary rolls from rollsData.js
let rollPrice = rolls[rollType].basePrice;
let rollImage = rolls[rollType].imageFile;

//Update header text in HTML
const headerElement = document.getElementById("biggertext");
headerElement.innerText = rollType + " Cinnamon Roll";

//update title text in HTML
const titleElement = document.getElementById("title");
titleElement.innerText = rollType + " Cinnamon Roll";

//update image in HTML
const rollChange = document.getElementById("image");
rollChange.src = "./hw5-assets/" + rollImage;

//update price in HTML
const priceElement = document.getElementById("totalprice");
priceElement.innerText = "$" + rollPrice;

console.log(rollImage);

//creating class template for new roll
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

//function to add selection to cart and only prints
function addToCart() {
  //getting pack and glazing selections from dropdown menu
  //loading menu into javascript
  let packMenu = document.getElementById("packoptions");
  let glazingMenu = document.getElementById("glazingOptions");

  // then get text from option that was chosen
  let glazeChoice = glazingMenu.options[glazingMenu.selectedIndex].text;
  let packChoice = packMenu.options[packMenu.selectedIndex].text;

  //create new roll with current selection
  let newRoll = new Roll(rollType, glazeChoice, packChoice, rollPrice);
  //adding to array cart
  cart.push(newRoll);
  console.log(cart);
}
