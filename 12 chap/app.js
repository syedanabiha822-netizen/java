// Q1: Character Check
function checkChar() {
  let ch = prompt("Enter a character");
  let code = ch.charCodeAt(0);

  if (code >= 48 && code <= 57) {
    alert("It is a Number");
  } else if (code >= 65 && code <= 90) {
    alert("It is an Uppercase Letter");
  } else if (code >= 97 && code <= 122) {
    alert("It is a Lowercase Letter");
  } else {
    alert("Invalid Input");
  }
}

// Q2: Larger Number
function compareNumbers() {
  let a = +prompt("Enter first number");
  let b = +prompt("Enter second number");

  if (a > b) {
    alert(a + " is larger");
  } else if (b > a) {
    alert(b + " is larger");
  } else {
    alert("Both numbers are equal");
  }
}

// Q3: Positive / Negative / Zero
function checkNumber() {
  let num = +prompt("Enter a number");

  if (num > 0) {
    alert("Number is Positive");
  } else if (num < 0) {
    alert("Number is Negative");
  } else {
    alert("Number is Zero");
  }
}

// Q4: Vowel Checker
function checkVowel() {
  let ch = prompt("Enter one character").toLowerCase();

  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    alert("True (Vowel)");
  } else {
    alert("False (Not a vowel)");
  }
}

// Q5: Password Validation
function passwordCheck() {
  let correctPassword = "js123";
  let userPassword = prompt("Enter your password");

  if (!userPassword) {
    alert("Please enter your password");
  } else if (userPassword === correctPassword) {
    alert("Correct! Password matched");
  } else {
    alert("Incorrect password");
  }
}

// Q6: Fix If Else
function fixIfElse() {
  let hour = 13;
  let greeting;

  if (hour < 18) {
    greeting = "Good Day";
  } else {
    greeting = "Good Evening";
  }

  alert(greeting);
}

// Q7: Time Greeting
function checkTime() {
  let time = +prompt("Enter time in 24-hour format (e.g. 1900)");

  if (time >= 0 && time < 1200) {
    alert("Good Morning");
  } else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
  } else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
  } else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
  } else {
    alert("Invalid Time");
  }
}
