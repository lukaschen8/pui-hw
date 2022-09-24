const rolls = {
  Original: {
    basePrice: 2.49,
    imageFile: "original-cinnamon-roll.jpeg",
  },
  Apple: {
    basePrice: 3.49,
    imageFile: "apple-cinnamon-roll.jpeg",
  },
  Raisin: {
    basePrice: 2.99,
    imageFile: "raisin-cinnamon-roll.jpeg",
  },
  Walnut: {
    basePrice: 3.49,
    imageFile: "walnut-cinnamon-roll.jpeg",
  },
  "Double-Chocolate": {
    basePrice: 3.99,
    imageFile: "double-chocolate-cinnamon-roll.jpeg",
  },
  Strawberry: {
    basePrice: 3.99,
    imageFile: "strawberry-cinnamon-roll.jpeg",
  },
};

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
