// var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

// var passwordLength = 8;

// var totalPasswords = 4;  

// for (var j = 1; j <= totalPasswords; j++) {

//     var password = "";

//     for (var i = 0; i < passwordLength; i++) {
      
//         var randomIndex = Math.floor(Math.random() * chars.length);

//         password = password + chars[randomIndex];
//     }

//     console.log("Password " + j + ": " + password);
// }

var ramadanStart = new Date("2026-02-18");

var today = new Date();

ramadanStart.setHours(0, 0, 0, 0);

today.setHours(0, 0, 0, 0);


var diffTime = ramadanStart - today;

var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
if(){

}
if (diffDays > 0) {
  console.log("Ramadan will start in "+ diffDays +" days. 🌙");
} 

else if (diffDays === 0) {
  console.log("Today is the first day of Ramadan.🌙✨");
} 
else {
  console.log("Ramadan has begun 🤍");
}