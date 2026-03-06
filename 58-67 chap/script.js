// Q1 i
var mainContent = document.getElementById("main-content");

// Q1 ii
var childElements = mainContent.children;

var output = document.getElementById("output");

output.innerHTML += "<b>Child Elements of main-content:</b><br>";

for (var i = 0; i < childElements.length; i++) {
    output.innerHTML += childElements[i].innerHTML + "<br>";
}


// Q1 iii
var renderElements = document.getElementsByClassName("render");

output.innerHTML += "<br><b>Elements with class 'render':</b><br>";

for (var i = 0; i < renderElements.length; i++) {
    output.innerHTML += renderElements[i].innerHTML + "<br>";
}


// Q1 iv v
document.getElementById("first-name").value = "Alex";
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";



// Q2 i
var formContent = document.getElementById("form-content");
output.innerHTML += "<br><b>Node type of form-content:</b> " + formContent.nodeType + "<br>";


// Q2 ii
var lastName = document.getElementById("lastName");
output.innerHTML += "<b>Node type of lastName:</b> " + lastName.nodeType + "<br>";
output.innerHTML += "<b>Child node type:</b> " + lastName.firstChild.nodeType + "<br>";


// Q2 iii
lastName.firstChild.nodeValue = "Last Name: Smith";
output.innerHTML += "<b>Updated lastName:</b> " + lastName.innerHTML + "<br>";


// Q2 iv
output.innerHTML += "<b>First child of main-content:</b> " + mainContent.firstElementChild.innerHTML + "<br>";
output.innerHTML += "<b>Last child of main-content:</b> " + mainContent.lastElementChild.innerHTML + "<br>";


// Q2 v
output.innerHTML += "<b>Next sibling of lastName:</b> " + lastName.nextElementSibling.innerHTML + "<br>";
output.innerHTML += "<b>Previous sibling of lastName:</b> " + lastName.previousElementSibling.innerHTML + "<br>";


// Q2 vi
var email = document.getElementById("email");

output.innerHTML += "<b>Parent node of email:</b> " + email.parentNode.nodeName + "<br>";
output.innerHTML += "<b>Node type of email:</b> " + email.nodeType + "<br>";

