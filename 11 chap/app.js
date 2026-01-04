function calculate() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var op = document.getElementById("op").value;
  var answer = document.getElementById("answer");
  var result;

  if (op === "+") {
    result = num1 + num2;
  } 
  else if (op === "-") {
    result = num1 - num2;
  } 
  else if (op === "*") {
    result = num1 * num2;
  } 
  else if (op === "/") {
    result = num1 / num2;
  } 
  else if (op === "%") {
    result = num1 % num2;
  } 
  else {
    answer.innerText = "Invalid Operation";
    return;
  }

  answer.innerText = "Result: " + result;
}
