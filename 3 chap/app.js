var age = 14;   
alert("I am " + age + " years old");

var visitCount = localStorage.getItem("visits");

if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

localStorage.setItem("visits", visitCount);

document.getElementById("visitBox").innerHTML =
    "You have visited this site " + visitCount + " times.";


var birthYear = 2011;  

document.getElementById("birthBox").innerHTML =
    "My birth year is " + birthYear + "<br>Data type of my declared variable is number.";

/* ===== Question 4 ===== */
var visitorName = "lana del rey";
var productTitle = "skirts";
var quantity = 5;

document.getElementById("orderBox").innerHTML =
    visitorName + " ordered " + quantity + " " + productTitle +
    "(s) on  American Eagle  Clothing store.";
