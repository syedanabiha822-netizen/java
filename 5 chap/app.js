var out = document.getElementById("output");
// 1 & 2: Addition, Sub, Mul, Div, mod,
var num1 = 10;
var num2 = 5;

out.innerHTML += `<h3>1 & 2. Operations</h3>`;
out.innerHTML += `Addition: <span>${num1 + num2}</span><br>`;
out.innerHTML += `Subtraction: <span>${num1 - num2}</span><br>`;
out.innerHTML += `Multiplication: <span>${num1 * num2}</span><br>`;
out.innerHTML += `Division: <span>${num1 / num2}</span><br>`;
out.innerHTML += `Modulus: <span>${num1 % num2}</span><br><br>`;
var a;
out.innerHTML += `<h3>3. Variable</h3>`;
out.innerHTML += `Value after declaration is: <span>${a}</span><br>`;
a = 5;
out.innerHTML += `Initial value: <span>${a}</span><br>`;
a++;
out.innerHTML += `After increment: <span>${a}</span><br>`;
a += 7;
out.innerHTML += `After addition: <span>${a}</span><br>`;
a--;
out.innerHTML += `After decrement: <span>${a}</span><br>`;
out.innerHTML += `Remainder: <span>${a % 3}</span><br><br>`;

// 4: Movie Tickets
var ticketPrice = 600;
out.innerHTML += `<h3>4. Movie Tickets</h3>`;
out.innerHTML += `Total cost: <span>${ticketPrice * 5} PKR</span><br><br>`;



// 5: Table
var table = 4;
out.innerHTML += `<h3>5. Table of ${table}</h3>`;
for (var i = 1; i <= 10; i++) {
    out.innerHTML += `${table} x ${i} = <span>${table * i}</span><br>`;
}

out.innerHTML += `<br>`;

// 6: Temperature
var c = 25;
var f = (c * 9 / 5) + 32;
out.innerHTML += `<h3>6. Temperature</h3>`;
out.innerHTML += `${c}°C is <span>${f}°F</span><br>`;

// 7: Shopping Cart
var p1 = 500, p2 = 300, q1 = 2, q2 = 3, ship = 200;
var total = (p1 * q1) + (p2 * q2) + ship;
out.innerHTML += `<h3>7. Shopping Cart</h3>`;
out.innerHTML += `Total Cost: <span>${total} PKR</span><br><br>`;



// 8: Percentage
var totalMarks = 500;
var obtained = 420;
out.innerHTML += `<h3>8. Percentage</h3>`;
out.innerHTML += `Percentage: <span>${(obtained / totalMarks) * 100}%</span><br><br>`;



// 9: Currency
var currency = (10 * 104.8) + (25 * 28);
out.innerHTML += `<h3>9. Currency</h3>`;
out.innerHTML += `Total PKR: <span>${currency}</span><br><br>`;



// 10: Arithmetic
var n = (5 + 5) * 10 / 2;
out.innerHTML += `<h3>10. Arithmetic</h3>`;
out.innerHTML += `Result: <span>${n}</span><br><br>`;

// 11: Age Calculator
var currentYear = 2025;
var birthYear = 2011;
out.innerHTML += `<h3>11. Age</h3>`;
out.innerHTML += `They are either <span>${currentYear - birthYear}</span> or <span>${currentYear - birthYear - 1}</span><br><br>`;


var r = 5;
out.innerHTML += `<h3>12. Circle</h3>`;
out.innerHTML += `Circumference: <span>${2 * 3.142 * r}</span><br>`;
out.innerHTML += `Area: <span>${3.142 * r * r}</span><br><br>`;


var snack = "Chips";
var age = 20;
var maxAge = 70;
var perDay = 2;
var totalSnack = (maxAge - age) * 365 * perDay;
out.innerHTML += `<h3>13. Lifetime Supply</h3>`;
out.innerHTML += `You will need <span>${totalSnack}</span> ${snack} till age <span>${maxAge}</span>`;
