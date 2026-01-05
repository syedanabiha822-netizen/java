/* Q1 */
var studentsLiteral = [];
document.getElementById("q1").innerHTML =
"<h2>Q1</h2>Empty Array (Literal): " + studentsLiteral;

/* Q2 */
var studentsObject = new Array();
document.getElementById("q2").innerHTML =
"<h2>Q2</h2>Empty Array (Object): " + studentsObject;

/* Q3 */
var stringArray = ["Apple", "Banana", "Mango"];
document.getElementById("q3").innerHTML =
"<h2>Q3</h2>String Array: " + stringArray;

/* Q4 */
var numberArray = [10, 20, 30, 40];
document.getElementById("q4").innerHTML =
"<h2>Q4</h2>Number Array: " + numberArray;

/* Q5 */
var booleanArray = [true, false, true];
document.getElementById("q5").innerHTML =
"<h2>Q5</h2>Boolean Array: " + booleanArray;

/* Q6 */
var mixedArray = ["Biya", 14, true];
document.getElementById("q6").innerHTML =
"<h2>Q6</h2>Mixed Array: " + mixedArray;

/* Q7 */
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
var edu = "";
for (var i = 0; i < qualifications.length; i++) {
  edu += (i + 1) + ") " + qualifications[i] + "<br>";
}
document.getElementById("q7").innerHTML =
"<h2>Q7</h2>Education Qualifications:<br>" + edu;

/* Q8 */
var names = ["Ali", "Ahmed", "Sara"];
var scores = [420, 380, 450];
var totalMarks = 500;
var result = "";

for (var i = 0; i < names.length; i++) {
  var per = (scores[i] / totalMarks) * 100;
  result += names[i] + " scored " + scores[i] +
   " marks (" + per.toFixed(2) + "%)<br>";
}
document.getElementById("q8").innerHTML =
"<h2>Q8</h2>" + result;
/* Q9 */
var colors = ["Red", "Green", "Blue"];

var startColor = prompt("Add color at beginning:");
colors.unshift(startColor);

var endColor = prompt("Add color at end:");
colors.push(endColor);

colors.unshift("Purple", "Pink");
colors.shift();
colors.pop();



var addIndex = prompt("Index to add color:");
var addColor = prompt("Color name:");
colors.splice(addIndex, 0, addColor);

var delIndex = prompt("Index to delete color(s):");
var delCount = prompt("How many colors to delete:");
colors.splice(delIndex, delCount);

document.getElementById("q9").innerHTML =
"<h2>Q9</h2>Final Colors Array:<br>" + colors;

/* Q10 */
var studentScores = [320, 230, 480, 120];
studentScores.sort(function(a, b) {
  return a - b;
});
document.getElementById("q10").innerHTML =
"<h2>Q10</h2>Sorted Scores (Ascending): " + studentScores;

/* Q11 */
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.getElementById("q11").innerHTML =
"<h2>Q11</h2>Cities: " + cities + "<br>Selected Cities: " + selectedCities;

/* Q12 */
var arr = ["This", "is", "my", "cat"];
var sentence = arr.join(" ");
document.getElementById("q12").innerHTML =
"<h2>Q12</h2>Joined String: " + sentence;

/* Q13 */
var fifo = [];
fifo.push("Keyboard");
fifo.push("Mouse");
fifo.push("Printer");

var removedItem = fifo.shift();

document.getElementById("q13").innerHTML =
"<h2>Q13</h2>FIFO Example:<br>Removed: " + removedItem +
"<br>Remaining: " + fifo;
