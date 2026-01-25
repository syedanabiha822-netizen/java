var output = document.getElementById("output");


var num1 = +prompt("Q1: Enter a positive number");
output.innerHTML += `
<div class="section">
<h2>Q1: Positive Number</h2>
<p>Number: ${num1}</p>
<p>Round off: ${Math.round(num1)}</p>
<p>Floor: ${Math.floor(num1)}</p>
<p>Ceil: ${Math.ceil(num1)}</p>
</div>
`;


var num2 = +prompt("Q2: Enter a negative floating number");
output.innerHTML += `
<div class="section">
<h2>Q2: Negative Floating Number</h2>
<p>Number: ${num2}</p>
<p>Round off: ${Math.round(num2)}</p>
<p>Floor: ${Math.floor(num2)}</p>
<p>Ceil: ${Math.ceil(num2)}</p>
</div>
`;


var num3 = +prompt("Q3: Enter any number (absolute value)");
output.innerHTML += `
<div class="section">
<h2>Q3: Absolute Value</h2>
<p>Number: ${num3}</p>
<p>Absolute Value: ${Math.abs(num3)}</p>
</div>
`;



var dice = Math.floor(Math.random() * 6) + 1;
output.innerHTML += `
<div class="section">
<h2>Q4: Dice Roll</h2>
<p>Dice Value: ${dice}</p>
</div>
`;

var toss = Math.floor(Math.random() * 2) + 1;
var coinResult = toss === 1 ? "Heads" : "Tails";
output.innerHTML += `
<div class="section">
<h2>Q5: Coin Toss</h2>
<p>Result: ${coinResult}</p>
</div>
`;


var randomNum = Math.floor(Math.random() * 100) + 1;
output.innerHTML += `
<div class="section">
<h2>Q6: Random Number (1–100)</h2>
<p>Random Number: ${randomNum}</p>
</div>
`;



var weightInput = prompt("Q7: Enter your weight");
var weight = parseFloat(weightInput);
output.innerHTML += `
<div class="section">
<h2>Q7: Weight</h2>
<p>Your weight is: ${weight} kgs</p>
</div>
`;


var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Q8: Guess the secret number (1–10)");

var message;
if (userGuess === secretNum) {
  message = "🎉 Congratulations! You guessed the correct number.";
} else {
  message = "❌ Sorry! The secret number was " + secretNum;
}

output.innerHTML += `
<div class="section">
<h2>Q8: Secret Number Game</h2>
<p>${message}</p>
</div>
`;
