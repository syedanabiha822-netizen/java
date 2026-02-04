var output = document.getElementById("output");
var now = new Date();


output.innerHTML += `
<div class="section">
<h2>Q1: Current Date & Time</h2>
<p>${now}</p>
</div>`;


var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month: " + months[now.getMonth()]);

var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert("Today is: " + days[now.getDay()]);


if (now.getDay() === 0 || now.getDay() === 6) {
  output.innerHTML += `
  <div class="section">
  <h2>Q4</h2>
  <p>It's Fun day 🎉</p>
  </div>`;
}


var date = now.getDate();
output.innerHTML += `
<div class="section">
<h2>Q5</h2>
<p>${date < 16 ? "First fifteen days of the month" : "Last days of the month"}</p>
</div>`;


var minutesSince1970 = Math.floor(now.getTime() / (1000 * 60));
output.innerHTML += `
<div class="section">
<h2>Q6</h2>
<p>Minutes since Jan 1, 1970: ${minutesSince1970}</p>
</div>`;


alert(now.getHours() < 12 ? "It's AM" : "It's PM");


var laterDate = new Date(2020, 11, 31);
output.innerHTML += `
<div class="section">
<h2>Q8</h2>
<p>${laterDate}</p>
</div>`;


var ramadanStart = new Date("June 18, 2015");
var diffDays = Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24));
output.innerHTML += `
<div class="section">
<h2>Q9</h2>
<p>Days since 1st Ramadan: ${diffDays}</p>
</div>`;


var start2015 = new Date("January 1, 2015");
var secondsPassed = Math.floor((now - start2015) / 1000);
output.innerHTML += `
<div class="section">
<h2>Q10</h2>
<p>Seconds since 1st Jan 2015: ${secondsPassed}</p>
</div>`;

var futureHour = new Date();
futureHour.setHours(futureHour.getHours() + 1);
output.innerHTML += `
<div class="section">
<h2>Q11</h2>
<p>${futureHour}</p>
</div>`;


var pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 100);
alert("100 years back: " + pastDate);


var age = +prompt("Enter your age");
var birthYear = now.getFullYear() - age;
output.innerHTML += `
<div class="section">
<h2>Q13</h2>
<p>Your birth year is: ${birthYear}</p>
</div>`;


var customerName = "ABC Customer";
var units = 410;
var chargesPerUnit = 16;
var lateCharges = 350;

var netAmount = (units * chargesPerUnit).toFixed(2);
var grossAmount = (Number(netAmount) + lateCharges).toFixed(2);

output.innerHTML += `
<div class="section">
<h2>Q14: K-Electric Bill</h2>
<p>Customer Name: ${customerName}</p>
<p>Current Month: ${months[now.getMonth()]}</p>
<p>Number of Units: ${units}</p>
<p>Charges per Unit: ${chargesPerUnit}</p>
<p>Net Amount (Due Date): ${netAmount}</p>
<p>Late Payment Surcharge: ${lateCharges}</p>
<p>Gross Amount (After Due Date): ${grossAmount}</p>
</div>`;