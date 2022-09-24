// var cart = [];

// // First, we get the query string from the URL. This is the list of parameters
// // that begins with a question mark. (These are known as "search parameters")
// const queryString = window.location.search;

// console.log(queryString);

// // Then, we use the query string to create a URLSearchParams object:
// const params = new URLSearchParams(queryString);

// console.log(params);

// // Finally, we can access the parameter we want using the "get" method:
// const rollType = params.get("roll");

// console.log(rollType);

// var rollPrice = rollType.basePrice;
// var rollImage = rollType.imageFile;

// //Update header text
// const headerElement = document.getElementById("biggertext");
// headerElement.innerText = rollType + " Cinnamon Roll";

// const titleElement = document.getElementById("title");
// titleElement.innerText = rollType + " Cinnamon Roll";

// const rollChange = document.getElementsByTagName("img");
// rollImage.src = "./hw4-assets/" + rollImage;
