var cart = [];

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

var rollPrice = rolls[rollType].basePrice;
var rollImage = rolls[rollType].imageFile;

//Update header text
const headerElement = document.getElementById("biggertext");
headerElement.innerText = rollType + " Cinnamon Roll";

//update title text
const titleElement = document.getElementById("title");
titleElement.innerText = rollType + " Cinnamon Roll";

//update image
const rollChange = document.getElementById("image");
rollChange.src = "./hw4-assets/" + rollImage;

//update price
const priceElement = document.getElementById("totalprice");
priceElement.innerText = "$" + rollPrice;

console.log(rollImage);

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

function addToCart() {
  var packMenu = document.getElementById("packoptions");
  var glazingMenu = document.getElementById("glazingOptions");

  var glazeChoice = glazingMenu.options[glazingMenu.selectedIndex].text;
  var packChoice = packMenu.options[packMenu.selectedIndex].text;

  let newRoll = new Roll(rollType, glazeChoice, packChoice, rollPrice);
  cart.push(newRoll);
  console.log(cart);
}
