function showResult(){
  var a = 2, b = 1;
  var result = --a - --b + ++b + b--;
  document.getElementById("output").innerHTML =
  "a = " + a + "<br>b = " + b + "<br>result = " + result;
}
