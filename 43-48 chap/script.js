

// Question 1
function showAlert(){
alert("You clicked the link!");
}


// Question 2
function mobileMsg(){
alert("Thanks for purchasing this mobile");
}


// Question 3
function deleteRow(btn){
let row = btn.parentNode.parentNode;
row.remove();
}


// Question 4
function changePicture(){
document.getElementById("changeImg").src="https://via.placeholder.com/150/ff0000";
}

function originalPicture(){
document.getElementById("changeImg").src="https://via.placeholder.com/150";
}


// Question 5
let count = 0;

function increase(){
count++;
document.getElementById("counter").innerText = count;
}

function decrease(){
count--;
document.getElementById("counter").innerText = count;
}