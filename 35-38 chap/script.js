var out = document.getElementById("output");

/* 1. Current Date & Time */
function showDateTime() {
  out.innerHTML += "<p><b>1.</b> " + new Date() + "</p>";
}
showDateTime();

/* 2. Greet User with Full Name */
function greetUser(firstName, lastName) {
  out.innerHTML += "<p><b>2.</b> Hello " + firstName + " " + lastName + "</p>";
}
greetUser("Biya", "Fatima");

/* 3. Add Two Numbers */
function addNumbers(a, b) {
  return a + b;
}
out.innerHTML += "<p><b>3.</b> Sum: " + addNumbers(5, 10) + "</p>";

/* 4. Calculator */
function calculator(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
out.innerHTML += "<p><b>4.</b> Calculator Result: " + calculator(10, 2, "*") + "</p>";

/* 5. Square of a Number */
function square(num) {
  return num * num;
}
out.innerHTML += "<p><b>5.</b> Square: " + square(6) + "</p>";

/* 6. Factorial */
function factorial(num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
out.innerHTML += "<p><b>6.</b> Factorial: " + factorial(5) + "</p>";

/* 7. Counting */
function counting(start, end) {
  var result = "";
  for (var i = start; i <= end; i++) {
    result += i + " ";
  }
  out.innerHTML += "<p><b>7.</b> Counting: " + result + "</p>";
}
counting(1, 10);

/* 8. Hypotenuse (Nested Function) */
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
    return x * x;
  }
  var hyp = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );
  out.innerHTML += "<p><b>8.</b> Hypotenuse: " + hyp + "</p>";
}
calculateHypotenuse(3, 4);

/* 9. Area of Rectangle */
function rectangleArea(width, height) {
  return width * height;
}
out.innerHTML += "<p><b>9.</b> Area (values): " + rectangleArea(5, 8) + "</p>";

var w = 6, h = 4;
out.innerHTML += "<p>Area (variables): " + rectangleArea(w, h) + "</p>";

/* 10. Palindrome Check */
function isPalindrome(str) {
  var rev = str.split("").reverse().join("");
  return str === rev;
}
out.innerHTML += "<p><b>10.</b> Palindrome: " + isPalindrome("madam") + "</p>";

/* 11. Capitalize First Letter of Each Word */
function capitalizeWords(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
out.innerHTML += "<p><b>11.</b> " + capitalizeWords("the quick brown fox") + "</p>";

/* 12. Longest Word */
function longestWord(str) {
  var words = str.split(" ");
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
out.innerHTML += "<p><b>12.</b> Longest Word: " + longestWord("Web Development Tutorial") + "</p>";

/* 13. Count Letter Occurrences */
function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}
out.innerHTML += "<p><b>13.</b> Occurrences: " + countLetter("JSResourceS.com", "o") + "</p>";

/* 14. Geometrizer */
function calcCircumference(radius) {
  return 2 * Math.PI * radius;
}
function calcArea(radius) {
  return Math.PI * radius * radius;
}
out.innerHTML += "<p><b>14.</b> Circumference: " + calcCircumference(5) + "</p>";
out.innerHTML += "<p>Area: " + calcArea(5) + "</p>";
