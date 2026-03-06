// ================= QUESTION 1 =================
function showData(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;

document.getElementById("formData").innerHTML =
"Name: " + name + "<br>" +
"Email: " + email + "<br>" +
"Password: " + pass;

}


// ================= QUESTION 2 =================
function readMore(){

document.getElementById("shortText").innerHTML =
"This is a mobile phone with great features. It has long battery life, high speed processor, amazing camera quality and large storage capacity.";

}


// ================= QUESTION 3 =================
function addStudent(){

let name = document.getElementById("studentName").value;
let age = document.getElementById("studentAge").value;
let course = document.getElementById("studentCourse").value;

let table = document.getElementById("studentTable");

let row = table.insertRow();

row.innerHTML =
"<td>"+name+"</td>"+
"<td>"+age+"</td>"+
"<td>"+course+"</td>"+
"<td><button onclick='deleteRow(this)'>Delete</button> <button onclick='editRow(this)'>Edit</button></td>";

}


function deleteRow(btn){
let row = btn.parentNode.parentNode;
row.remove();
}


function editRow(btn){

let row = btn.parentNode.parentNode;

let name = row.cells[0].innerText;
let age = row.cells[1].innerText;
let course = row.cells[2].innerText;

document.getElementById("studentName").value = name;
document.getElementById("studentAge").value = age;
document.getElementById("studentCourse").value = course;

row.remove();

}
