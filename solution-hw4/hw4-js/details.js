var cart = [];

// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);

// Finally, we can access the parameter we want using the "get" method:
const rollType = params.get("roll");

var rollPrice = rollType.basePrice;
var rollImage = rollType.imageFile;

//Update header text
const headerElement = document.getElementsByTagName("title");
headerElement.innerText = rollType;
