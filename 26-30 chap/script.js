


// var randomNum = Math.ceil(Math.random() * 6) ;
// console.log(randomNum);




// //26 chap

// // Math.round()
// var num1 = 4.6;
// var roundNum = Math.round(num1);
// console.log("Round:", roundNum); // 5

// // Math.floor()
// var num2 = 4.9;
// var floorNum = Math.floor(num2);
// console.log("Floor:", floorNum); // 4

// // Math.ceil()
// var num3 = 4.1;
// var ceilNum = Math.ceil(num3);
// console.log("Ceil:", ceilNum); // 5

// //27 chap

// // Random number between 0 and 1
// var randomNum = Math.random();
// console.log("Random:", randomNum);



// // Dice (1 to 6)
// var dice = Math.floor(Math.random() * 6) + 1;
// console.log("Dice Value:", dice);

// // Coin Toss
// var toss = Math.floor(Math.random() * 2) + 1;

// if (toss === 1) {
//   console.log("Heads");
// } else {
//   console.log("Tails")}
//   //28 chap


//   // parseInt
// var str1 = "25";
// var num1 = parseInt(str1);
// console.log(num1 + 5); // 30

// // parseFloat
// var str2 = "3.75";
// var num2 = parseFloat(str2);
// console.log(num2); // 3.75


// var str3 = "100Rs";
// var num3 = parseInt(str3);
// console.log(num3); // 100

// // 29 chap
// var number = 123;
// var str = number.toString();
// console.log(str);
// console.log(typeof str); 


// var num2 = 45.67;
// var str2 = num2.toString();
// console.log(str2);
// console.log(typeof num2);  
// User se choice lo


var userChoice = prompt("Enter 0 for Head OR 1 for Tail");
var laptopChoice = Math.floor(Math.random() * 2);

if (userChoice == computerChoice) {
  alert("User: " + userChoice + 
        "\nComputer: " + computerChoice + 
        "\nResult: You Won");
} else {
  alert("User: " + userChoice + 
        "\nComputer: " + computerChoice + 
        "\nResult: You Lose ");
}


