//Global variables
//variables to track each possible quiz outcome.
let questionCount = 0;
let sidecarScore = 0;
let arrivisteScore = 0;
let klvnScore = 0;
let cafeCarnegieScore = 0;

//variables for each quiz question.
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");

let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");

let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");

let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
let q4a3 = document.getElementById("q4a3");
let q4a4 = document.getElementById("q4a4");

let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");
let q5a3 = document.getElementById("q5a3");
let q5a4 = document.getElementById("q5a4");

let q6a1 = document.getElementById("q6a1");
let q6a2 = document.getElementById("q6a2");
let q6a3 = document.getElementById("q6a3");
let q6a4 = document.getElementById("q6a4");

let result = document.getElementById("result");
let restart = document.getElementById("restart");
let learnMore = document.getElementById("learnMore");

//Event Listeners to answer choice variables.
q1a1.addEventListener("click", sidecar);
q1a2.addEventListener("click", arriviste);
q1a3.addEventListener("click", klvn);
q1a4.addEventListener("click", cafeCarnegie);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", sidecar);
q2a2.addEventListener("click", arriviste);
q2a3.addEventListener("click", klvn);
q2a4.addEventListener("click", cafeCarnegie);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", sidecar);
q3a2.addEventListener("click", arriviste);
q3a3.addEventListener("click", klvn);
q3a4.addEventListener("click", cafeCarnegie);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", sidecar);
q4a2.addEventListener("click", arriviste);
q4a3.addEventListener("click", klvn);
q4a4.addEventListener("click", cafeCarnegie);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);

q5a1.addEventListener("click", sidecar);
q5a2.addEventListener("click", arriviste);
q5a3.addEventListener("click", klvn);
q5a4.addEventListener("click", cafeCarnegie);
q5a1.addEventListener("click", disableBtn5);
q5a2.addEventListener("click", disableBtn5);
q5a3.addEventListener("click", disableBtn5);
q5a4.addEventListener("click", disableBtn5);

q6a1.addEventListener("click", sidecar);
q6a2.addEventListener("click", arriviste);
q6a3.addEventListener("click", klvn);
q6a4.addEventListener("click", cafeCarnegie);
q6a1.addEventListener("click", disableBtn6);
q6a2.addEventListener("click", disableBtn6);
q6a3.addEventListener("click", disableBtn6);
q6a4.addEventListener("click", disableBtn6);

restart.addEventListener("click", refresh);

//Define quiz functions here

function disableBtn1() {
  let bodyRect = document.body.getBoundingClientRect();
  let questionTwoHeader = document.getElementById("q2header");
  let rect = questionTwoHeader.getBoundingClientRect();
  window.scrollTo(0, rect.top - bodyRect.top - 20);
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}
function disableBtn2() {
  let bodyRect = document.body.getBoundingClientRect();
  let questionThreeHeader = document.getElementById("q3header");
  let rect = questionThreeHeader.getBoundingClientRect();
  window.scrollTo(0, rect.top - bodyRect.top - 20);
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}
function disableBtn3() {
  let bodyRect = document.body.getBoundingClientRect();
  let questionFourHeader = document.getElementById("q4header");
  let rect = questionFourHeader.getBoundingClientRect();
  window.scrollTo(0, rect.top - bodyRect.top - 20);
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}
function disableBtn4() {
  let bodyRect = document.body.getBoundingClientRect();
  let questionFiveHeader = document.getElementById("q5header");
  let rect = questionFiveHeader.getBoundingClientRect();
  window.scrollTo(0, rect.top - bodyRect.top - 20);
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}
function disableBtn5() {
  let bodyRect = document.body.getBoundingClientRect();
  let questionSixHeader = document.getElementById("q6header");
  let rect = questionSixHeader.getBoundingClientRect();
  window.scrollTo(0, rect.top - bodyRect.top - 20);
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
  document.getElementById("q5a4").disabled = true;
}
function disableBtn6() {
  document.getElementById("q6a1").disabled = true;
  document.getElementById("q6a2").disabled = true;
  document.getElementById("q6a3").disabled = true;
  document.getElementById("q6a4").disabled = true;
}

function sidecar() {
  sidecarScore += 1;
  questionCount += 1;
  //alert("One point to sidecar!");
  if (questionCount >= 6) {
    updateResult();
  }
}

function arriviste() {
  arrivisteScore += 1;
  questionCount += 1;
  //alert("One point to arriviste");
  if (questionCount >= 6) {
    updateResult();
  }
}

function klvn() {
  klvnScore += 1;
  questionCount += 1;
  //alert("One point to klvn");
  if (questionCount >= 6) {
    updateResult();
  }
}

function cafeCarnegie() {
  cafeCarnegieScore += 1;
  questionCount += 1;
  //alert("One point to cafeCarnegie!");
  if (questionCount >= 6) {
    updateResult();
  }
}

function updateResult() {
  if (
    sidecarScore == 2 &&
    arrivisteScore == 2 &&
    (klvnScore == 2 || cafeCarnegieScore == 2)
  ) {
    result.innerHTML = "Your result is... <i>any PGH Cafe!</i>";
  } else if (
    klvnScore == 2 &&
    cafeCarnegieScore == 2 &&
    (sidecarScore == 2 || arrivisteScore == 2)
  ) {
    result.innerHTML = "Your result is... <i>any PGH Cafe!</i>";
  } else if (sidecarScore == 3 && arrivisteScore == 3) {
    learnMore.href = "./coffee.html#Sidecar";
    result.innerHTML =
      "Your result is... <i>&nbsp;Sidecar&nbsp;</i> and <i>&nbsp;Arriviste!</i>";
  } else if (sidecarScore == 3 && klvnScore == 3) {
    learnMore.href = "./coffee.html#Sidecar";
    result.innerHTML =
      "Your result is... <i>&nbsp;Sidecar&nbsp;</i> and <i>&nbsp;KLVN Coffee Lab!</i>";
  } else if (sidecarScore == 3 && cafeCarnegieScore == 3) {
    learnMore.href = "./coffee.html#Sidecar";
    result.innerHTML =
      "Your result is... <i>&nbsp;Sidecar&nbsp;</i> and <i>&nbsp;Cafe Carnegie!</iz>";
  } else if (arrivisteScore == 3 && klvnScore == 3) {
    learnMore.href = "./coffee.html#Arriviste";
    result.innerHTML =
      "Your result is... <i>&nbsp;Arriviste&nbsp;</i> and <i>&nbsp;KLVN Coffee Lab!</i>";
  } else if (arrivisteScore == 3 && cafeCarnegieScore == 3) {
    learnMore.href = "./coffee.html#Arriviste";
    result.innerHTML =
      "Your result is... <i>&nbsp;Arriviste&nbsp;</i> and <i>&nbsp;Cafe Carnegie!</i>";
  } else if (klvnScore == 3 && cafeCarnegieScore == 3) {
    learnMore.href = "./coffee.html#Klvn";
    result.innerHTML =
      "Your result is... <i>&nbsp;KLVN Coffee Lab&nbsp;</i> and <i>&nbsp;Cafe Carnegie!</i>";
  } else if (sidecarScore >= 3) {
    learnMore.href = "./coffee.html#Sidecar";
    result.innerHTML = "Your result is... <i>Sidecar!</i>";
  } else if (arrivisteScore >= 3) {
    learnMore.href = "./coffee.html#Arriviste";
    result.innerHTML = "Your result is... <i>Arriviste!</i>";
  } else if (klvnScore >= 3) {
    learnMore.href = "./coffee.html#Klvn";
    result.innerHTML = "Your result is... <i>KLVN Coffee Lab!</i>";
  } else if (cafeCarnegieScore >= 3) {
    learnMore.href = "./coffee.html#Carnegie";
    result.innerHTML = "Your result is... <i>Cafe Carnegie!</i>";
  } else {
    result.innerHTML = "Hmm... try again!";
  }
}

function refresh() {
  result.innerHTML = "Your result is...";
  let questionCount = 0;
  let sidecarScore = 0;
  let arrivisteScore = 0;
  let klvnScore = 0;
  let cafeCarnegieScore = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;

  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;

  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;

  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;

  document.getElementById("q6a1").disabled = false;
  document.getElementById("q6a2").disabled = false;
  document.getElementById("q6a3").disabled = false;
  document.getElementById("q6a4").disabled = false;
}
