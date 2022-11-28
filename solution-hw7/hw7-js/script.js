//Global variables
//variables to track each possible quiz outcome.
let questionCount = 0;
let badguyScore = 0;
let wtpoScore = 0;
let lovelyScore = 0;
let bellyacheScore = 0;

//letiables for each quiz question.
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

//#TODO: Add Event Listeners to your answer choice letiables.
q1a1.addEventListener("click", badguy);
q1a2.addEventListener("click", wtpo);
q1a3.addEventListener("click", lovely);
q1a4.addEventListener("click", bellyache);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", badguy);
q2a2.addEventListener("click", wtpo);
q2a3.addEventListener("click", lovely);
q2a4.addEventListener("click", bellyache);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", badguy);
q3a2.addEventListener("click", wtpo);
q3a3.addEventListener("click", lovely);
q3a4.addEventListener("click", bellyache);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", badguy);
q4a2.addEventListener("click", wtpo);
q4a3.addEventListener("click", lovely);
q4a4.addEventListener("click", bellyache);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);

q5a1.addEventListener("click", badguy);
q5a2.addEventListener("click", wtpo);
q5a3.addEventListener("click", lovely);
q5a4.addEventListener("click", bellyache);
q5a1.addEventListener("click", disableBtn5);
q5a2.addEventListener("click", disableBtn5);
q5a3.addEventListener("click", disableBtn5);
q5a4.addEventListener("click", disableBtn5);

q6a1.addEventListener("click", badguy);
q6a2.addEventListener("click", wtpo);
q6a3.addEventListener("click", lovely);
q6a4.addEventListener("click", bellyache);
q6a1.addEventListener("click", disableBtn6);
q6a2.addEventListener("click", disableBtn6);
q6a3.addEventListener("click", disableBtn6);
q6a4.addEventListener("click", disableBtn6);

restart.addEventListener("click", refresh);

//#TODO: Define quiz functions here
function disableBtn1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}
function disableBtn2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}
function disableBtn3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}
function disableBtn4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}
function disableBtn5() {
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

function badguy() {
  badguyScore += 1;
  questionCount += 1;
  //alert("One point to bad guy!");
  if (questionCount >= 6) {
    updateResult();
  }
}

function wtpo() {
  wtpoScore += 1;
  questionCount += 1;
  //alert("One point to when the party's over!");
  if (questionCount >= 6) {
    updateResult();
  }
}

function lovely() {
  lovelyScore += 1;
  questionCount += 1;
  //alert("One point to lovely");
  if (questionCount >= 6) {
    updateResult();
  }
}

function bellyache() {
  bellyacheScore += 1;
  questionCount += 1;
  //alert("One point to bellyache!");
  if (questionCount >= 6) {
    updateResult();
  }
}

function updateResult() {
  if (
    badguyScore == 2 &&
    wtpoScore == 2 &&
    (lovelyScore == 2 || bellyacheScore == 2)
  ) {
    result.innerHTML = "Your result is... any Billie Eilish Song!</i>";
  } else if (
    lovelyScore == 2 &&
    bellyacheScore == 2 &&
    (badguyScore == 2 || wtpoScore == 2)
  ) {
    result.innerHTML = "Your result is... any Billie Eilish Song!</i>";
  } else if (badguyScore == 3 && wtpoScore == 3) {
    result.innerHTML =
      "Your result is... <i>bad guy</i> and <i>when the party's over!</i>";
  } else if (badguyScore == 3 && lovelyScore == 3) {
    result.innerHTML = "Your result is... <i>bad guy</i> and <i>lovely!</i>";
  } else if (badguyScore == 3 && bellyacheScore == 3) {
    result.innerHTML = "Your result is... <i>bad guy</i> and <i>bellyache!</i>";
  } else if (wtpoScore == 3 && lovelyScore == 3) {
    result.innerHTML =
      "Your result is... <i>when the party's over</i> and <i>lovely!</i>";
  } else if (wtpoScore == 3 && bellyacheScore == 3) {
    result.innerHTML =
      "Your result is... <i>when the party's over</i> and <i>bellyache!</i>";
  } else if (lovelyScore == 3 && bellyacheScore == 3) {
    result.innerHTML = "Your result is... <i>lovely</i> and <i>bellyache!</i>";
  } else if (badguyScore >= 3) {
    result.innerHTML = "Your result is... <i>bad guy!</i>";
  } else if (wtpoScore >= 3) {
    result.innerHTML = "Your result is... <i>when the party's over!</i>";
  } else if (lovelyScore >= 3) {
    result.innerHTML = "Your result is... <i>lovely ft. Khalid!</i>";
  } else if (bellyacheScore >= 3) {
    result.innerHTML = "Your result is... <i>bellyache!</i>";
  } else {
    result.innerHTML = "Hmm... try again!";
  }
}

function refresh() {
  result.innerHTML = "Your result is...";
  let questionCount = 0;
  let badguyScore = 0;
  let wtpoScore = 0;
  let lovelyScore = 0;
  let bellyacheScore = 0;
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
