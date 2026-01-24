var output = document.getElementById("output");

function print(text) {
  output.innerHTML += `<div class="box">${text}</div>`;
}

var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");
var fullName = firstName + " " + lastName;
print("<span>Q1:</span> Hello " + fullName);


var mobile = prompt("Enter your favorite mobile phone model:");
print("<span>Q2:</span> Length: " + mobile.length);

var word = "Pakistani";
print("<span>Q3:</span> Index of 'n': " + word.indexOf("n"));


var hello = "Hello World";
print("<span>Q4:</span> Last index of 'l': " + hello.lastIndexOf("l"));

print("<span>Q5:</span> Character at index 3: " + word.charAt(3));


var fullName2 = firstName.concat(" ",lastName);
print("<span>Q6:</span> Hello " + fullName2);


var city = "Hyderabad";
print("<span>Q7:</span> " + city.replace("Hyder", "Islam"));

var message = "Ali and Sami are best friends. They play cricket and football together.";
print("<span>Q8:</span> " + message.replace(/and/g, "&"));

var strNum = "472";
var num = Number(strNum);
print("<span>Q9:</span> Value: " + num + " | Type: " + typeof num);

var userText = prompt("Enter any text:");
print("<span>Q10:</span> " + userText.toUpperCase());

var title = userText.split(" ");
for (var i = 0; i < title.length; i++) {
  title[i] = title[i][0].toUpperCase() + title[i].slice(1).toLowerCase();
}
print("<span>Q11:</span> " + title.join(" "));

var num2 = 35.36;
print("<span>Q12:</span> " + num2.toString().replace(".", ""));

var username = prompt("Enter username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var code = username.charCodeAt(i);
  if (code === 33 || code === 44 || code === 46 || code === 64) {
    isValid = false;
    break;
  }
}
print("<span>Q13:</span> " + (isValid ? "Valid Username" : "Invalid Username"));

var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Search item:").toLowerCase();

print("<span>Q14:</span> " + (items.includes(search) ? "Item Found" : "Item Not Found"));

var password = prompt("Enter password:");
var hasAlpha = false;
var hasNum = false;

if (password.length >= 6 && isNaN(password[0])) {
  for (var i = 0; i < password.length; i++) {
    var c = password.charCodeAt(i);
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) hasAlpha = true;
    if (c >= 48 && c <= 57) hasNum = true;
  }
}
print("<span>Q15:</span> " + (hasAlpha && hasNum ? "Valid Password" : "Invalid Password"));

var university = "University of Karachi";
var uniArr = university.split("");
print("<span>Q16:</span> " + uniArr.join(" , "));

var lastCharInput = prompt("Enter any word:");
print("<span>Q17:</span> Last Character: " + lastCharInput.charAt(lastCharInput.length - 1));

var sentence = "The quick brown fox jumps over the lazy dog";
var count = sentence.toLowerCase().split("the").length - 1;
print("<span>Q18:</span> Occurrences of 'the': " + count)
